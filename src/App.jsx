import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { reduce, makeLobby, newLocalGame } from './game/engine.js';
import { BOARDS, CATS, MODE } from './game/constants.js';
import { sb, SUPABASE_URL, createRoom, getRoom, updateRoom, subscribeRoom, signInGoogle, signOut, ensureProfile, recordResult } from './lib/supabase.js';
import Game, { EndScreen } from './ui/Game.jsx';
import Rules from './ui/Rules.jsx';
import { DEFAULT_SETTINGS, SettingsForm, catsOf, gameSettings } from './ui/Setup.jsx';

const ls = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* sin almacenamiento */ } },
  del(k) { try { localStorage.removeItem(k); } catch { /* nada */ } },
};
function guestId() {
  let id = ls.get('triplazo-guest', null);
  if (!id) { id = 'g-' + (crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2)); ls.set('triplazo-guest', id); }
  return id;
}
const winnerIdx = (G) => {
  if (G.endInfo?.mode === 'direct') return G.endInfo.winner;
  let best = 0; G.players.forEach((p, i) => { if (p.score > G.players[best].score) best = i; }); return best;
};

function useOnlineRoom(code) {
  const [room, setRoom] = useState(null);
  const [err, setErr] = useState(null);
  const ref = useRef(null);
  const apply = useCallback((r) => { if (!r) return; if (!ref.current || r.version > ref.current.version) { ref.current = r; setRoom(r); } }, []);
  useEffect(() => {
    if (!code) return undefined;
    let alive = true;
    ref.current = null; setRoom(null); setErr(null);
    getRoom(code).then((r) => { if (!alive) return; if (!r) setErr('No existe ninguna sala con ese código.'); else apply(r); }).catch(() => alive && setErr('No se pudo conectar con la sala.'));
    const unsub = subscribeRoom(code, (row) => apply({ code: row.code, version: row.version, state: row.state }));
    const iv = setInterval(() => { getRoom(code).then((r) => alive && apply(r)).catch(() => {}); }, 4000);
    return () => { alive = false; unsub(); clearInterval(iv); };
  }, [code, apply]);
  const dispatch = useCallback(async (a) => {
    for (let i = 0; i < 8; i++) {
      const cur = ref.current; if (!cur) return;
      const next = reduce(cur.state, a); if (!next) return;
      try {
        const v = await updateRoom(code, cur.version, next);
        if (v >= 0) { apply({ code, version: v, state: next }); return; }
        const fresh = await getRoom(code); if (fresh) { ref.current = fresh; setRoom(fresh); }
      } catch { await new Promise((r) => setTimeout(r, 400)); }
    }
  }, [code, apply]);
  return { room, dispatch, err };
}

export default function App() {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [googleOn, setGoogleOn] = useState(null);
  const [name, setNameState] = useState(() => ls.get('triplazo-name', ''));
  const setName = (n) => { setNameState(n); ls.set('triplazo-name', n); };
  const params = new URLSearchParams(window.location.search);
  const [screen, setScreen] = useState(() => (params.get('sala') ? 'room' : 'home'));
  const [code, setCode] = useState(() => (params.get('sala') || '').toUpperCase());
  const [settings, setSettings] = useState(() => ({ ...DEFAULT_SETTINGS, ...ls.get('triplazo-settings', {}) }));
  const [localPlayers, setLocalPlayers] = useState(() => ls.get('triplazo-players', ['Jugador 1', 'Jugador 2']));
  const [localG, setLocalG] = useState(() => ls.get('triplazo-local', null));
  const [busy, setBusy] = useState(false);
  const [joinCode, setJoinCode] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => { ls.set('triplazo-settings', settings); }, [settings]);
  useEffect(() => { ls.set('triplazo-players', localPlayers); }, [localPlayers]);
  useEffect(() => { if (localG) ls.set('triplazo-local', localG); }, [localG]);

  // Sesión de Google (Supabase Auth)
  useEffect(() => {
    sb.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = sb.auth.onAuthStateChange((_e, s) => setSession(s));
    fetch(`${SUPABASE_URL}/auth/v1/settings`, { headers: { apikey: 'sb_publishable_buJTOsgFc-y3hKYnqgxWkg_oO8qiuvr' } })
      .then((r) => r.json()).then((j) => setGoogleOn(!!j?.external?.google)).catch(() => setGoogleOn(false));
    return () => sub.subscription.unsubscribe();
  }, []);
  useEffect(() => {
    if (!session?.user) { setProfile(null); return; }
    ensureProfile(session.user).then((p) => { setProfile(p); if (!ls.get('triplazo-name', '')) setName(p.name); }).catch(() => {});
  }, [session?.user?.id]);

  const myId = session?.user?.id || guestId();
  const myName = (name || profile?.name || '').trim();
  const myAvatar = session?.user?.user_metadata?.avatar_url || null;

  const { room, dispatch, err } = useOnlineRoom(screen === 'room' ? code : null);
  const G = room?.state;

  // Entrar en la sala (lobby) automáticamente
  useEffect(() => {
    if (!G || G.status !== 'lobby' || !myName) return;
    const me = G.players.find((p) => p.id === myId);
    if (!me || me.name !== myName) dispatch({ t: 'join', player: { id: myId, name: myName, avatar: myAvatar } });
  }, [G?.status, G?.players?.length, myName, myId]);
  useEffect(() => { if (screen === 'room' && code) { ls.set('triplazo-room', code); const u = new URL(window.location.href); u.searchParams.set('sala', code); window.history.replaceState(null, '', u); } }, [screen, code]);

  // Estadísticas de cuenta al terminar
  useEffect(() => {
    if (!G || G.status !== 'ended' || !session?.user) return;
    const idx = G.players.findIndex((p) => p.id === myId); if (idx < 0) return;
    const key = `triplazo-rec-${code}-${G.seq}`;
    if (ls.get(key, false)) return; ls.set(key, true);
    recordResult(winnerIdx(G) === idx);
  }, [G?.status]);

  const goHome = () => { const u = new URL(window.location.href); u.searchParams.delete('sala'); window.history.replaceState(null, '', u); setScreen('home'); setCode(''); };

  const create = async () => {
    if (!myName) { setMsg('Pon tu nombre para crear la sala.'); return; }
    setBusy(true); setMsg('');
    try {
      const st = makeLobby(gameSettings(settings), { id: myId, name: myName, avatar: myAvatar });
      const c = await createRoom(myId, st);
      setCode(c); setScreen('room');
    } catch { setMsg('No se pudo crear la sala. Inténtalo de nuevo.'); }
    setBusy(false);
  };
  const join = () => {
    const c = joinCode.trim().toUpperCase();
    if (c.length !== 4) { setMsg('El código tiene 4 letras.'); return; }
    if (!myName) { setMsg('Pon tu nombre para entrar.'); return; }
    setMsg(''); setCode(c); setScreen('room');
  };

  // ---------- pantallas ----------
  if (screen === 'local' && localG) {
    const ctx = { G: localG, dispatch: (a) => setLocalG((s) => reduce(s, a) || s), can: () => true, local: true, myIdx: null, isHost: true };
    if (localG.status === 'ended') return <EndScreen G={localG} onRematch={() => setLocalG(newLocalGame(localG.settings, localG.players.map((p) => p.name)))} onHome={() => { setLocalG(null); ls.del('triplazo-local'); goHome(); }} />;
    return <Game ctx={ctx} onExit={() => { setScreen('home'); }} />;
  }

  if (screen === 'room') {
    if (err) return <Shell><p className="note">{err}</p><button className="cta alt" onClick={goHome}>Volver</button></Shell>;
    if (!myName) return <Shell><NameBox name={name} setName={setName} profile={profile} /><p className="hint">Pon tu nombre para entrar en la sala {code}.</p></Shell>;
    if (!G) return <Shell><p className="waiting">Conectando con la sala {code}…</p></Shell>;
    const myIdx = G.players.findIndex((p) => p.id === myId);
    const isHost = G.host === myId;
    const ctx = { G, dispatch, can: (i) => i === myIdx, local: false, myIdx: myIdx >= 0 ? myIdx : null, isHost };
    if (G.status === 'lobby') return <Lobby G={G} code={code} isHost={isHost} dispatch={dispatch} onExit={goHome} />;
    if (G.status === 'ended') return <EndScreen G={G} onRematch={isHost ? () => dispatch({ t: 'rematch' }) : null} rematchLabel="Revancha en la sala" onHome={goHome} />;
    return <Game ctx={ctx} roomCode={code} onExit={goHome} />;
  }

  if (screen === 'setup-local' || screen === 'setup-online') {
    const online = screen === 'setup-online';
    const cats = catsOf(settings);
    return (
      <Shell>
        <button className="mini back" onClick={() => setScreen('home')}>← Inicio</button>
        <h2 className="h2">{online ? 'Nueva partida online' : 'Partida en un solo móvil'}</h2>
        <SettingsForm s={settings} set={setSettings} players={online ? null : localPlayers} setPlayers={setLocalPlayers} />
        <details className="rules"><summary>Cómo se juega y puntuación</summary><div style={{ marginTop: 10 }}><Rules /></div></details>
        {msg && <p className="note">{msg}</p>}
        <button className="cta" disabled={cats.length !== 6 || busy}
          onClick={() => {
            if (online) create();
            else { setLocalG(newLocalGame(gameSettings(settings), localPlayers.map((n, i) => n.trim() || `Jugador ${i + 1}`))); setScreen('local'); }
          }}>{online ? (busy ? 'Creando…' : 'Crear sala') : 'Empezar partida'}</button>
      </Shell>
    );
  }

  // home
  const lastRoom = ls.get('triplazo-room', null);
  return (
    <Shell>
      <p className="intro">Trivial de tablero para jugar entre amigos: tira el dado, gira la ruleta de modo, roba quesitos en duelos y juégatelo todo en la ronda final.</p>
      <section className="card">
        <div className="label">Tu perfil</div>
        {session?.user ? (
          <div className="me">
            {myAvatar ? <img src={myAvatar} alt="" className="avatar" referrerPolicy="no-referrer" /> : <span className="avatar ph">{(myName[0] || '?').toUpperCase()}</span>}
            <div className="mecol"><b>{profile?.name || myName}</b><span className="hint">{session.user.email}{profile ? ` · ${profile.games} partidas · ${profile.wins} victorias` : ''}</span></div>
            <button className="mini" onClick={() => signOut()}>Salir</button>
          </div>
        ) : (
          <>
            {googleOn ? <button className="gbtn" onClick={() => signInGoogle()}><GoogleG /> Entrar con Google</button> : <p className="hint">{googleOn === false ? 'El acceso con Google se está activando. Mientras tanto, juega como invitado.' : 'Comprobando acceso…'}</p>}
          </>
        )}
        <NameBox name={name} setName={setName} profile={profile} />
      </section>
      <section className="section">
        <div className="label">Jugar online · cada uno en su móvil</div>
        <button className="cta" onClick={() => { setMsg(''); setScreen('setup-online'); }}>Crear partida</button>
        <div className="joinrow">
          <input value={joinCode} onChange={(e) => setJoinCode(e.target.value.toUpperCase().slice(0, 4))} placeholder="CÓDIGO" aria-label="Código de sala" className="codein" />
          <button className="cta alt" onClick={join}>Unirme</button>
        </div>
        {lastRoom && <button className="ghost" onClick={() => { setCode(lastRoom); setScreen('room'); }}>Volver a la sala {lastRoom}</button>}
      </section>
      <section className="section">
        <div className="label">Un solo móvil</div>
        <button className="cta alt" onClick={() => setScreen('setup-local')}>Partida en este móvil</button>
        {localG && localG.status === 'playing' && <button className="ghost" onClick={() => setScreen('local')}>Continuar la partida guardada</button>}
      </section>
      {msg && <p className="note">{msg}</p>}
    </Shell>
  );
}

function Shell({ children }) {
  return (
    <div className="app">
      <div className="brand"><h1 className="logo">Tripla<b>zo</b></h1><span className="tag">v0.3</span></div>
      {children}
    </div>
  );
}

function NameBox({ name, setName, profile }) {
  return (
    <div className="section">
      <label className="label" htmlFor="myname">Nombre en la partida</label>
      <input id="myname" value={name} maxLength={14} placeholder={profile?.name || 'Tu nombre'} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

function Lobby({ G, code, isHost, dispatch, onExit }) {
  const [copied, setCopied] = useState(false);
  const [edit, setEdit] = useState(false);
  const link = `${window.location.origin}${window.location.pathname}?sala=${code}`;
  const s = G.settings;
  const [draft, setDraft] = useState(null);
  const copy = async () => { try { await navigator.clipboard.writeText(link); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { setCopied(false); } };
  return (
    <div className="app">
      <div className="brand"><h1 className="logo">Tripla<b>zo</b></h1><button className="mini" onClick={onExit}>Salir</button></div>
      <div className="roomcode"><span className="label">Código de sala</span><b>{code}</b></div>
      <div className="linkrow"><input readOnly value={link} aria-label="Enlace de la sala" onFocus={(e) => e.target.select()} /><button className="mini gold" onClick={copy}>{copied ? 'Copiado' : 'Copiar'}</button></div>
      <section className="section">
        <div className="label">Jugadores ({G.players.length}/6)</div>
        <div className="ftable">
          {G.players.map((p) => (
            <div key={p.id} className="frow">
              <b><i className="pdot" style={{ background: p.col }} />{p.name}{p.id === G.host ? ' · anfitrión' : ''}</b><span />
              {isHost && p.id !== G.host ? <button className="mini" onClick={() => dispatch({ t: 'kick', id: p.id })}>Quitar</button> : <span />}
            </div>
          ))}
        </div>
      </section>
      <section className="card">
        <div className="label">Ajustes</div>
        <p className="hint">{s.cats.map((c) => CATS[c].n).join(' · ')}</p>
        <p className="hint">Tablero {BOARDS[s.board].n} · Dificultad {s.diff === 'mix' ? 'mixta' : ['', 'fácil', 'media', 'difícil', 'extrema'][s.diff]} · {s.endMode === 'final' ? 'Ronda final a apuestas' : 'Victoria directa'}</p>
        <p className="hint">Modos: {s.modes.map((m) => MODE[m].n).join(', ')}</p>
        {isHost && !edit && <button className="ghost" onClick={() => { setDraft({ ...DEFAULT_SETTINGS, ...ls.get('triplazo-settings', {}) }); setEdit(true); }}>Cambiar ajustes</button>}
      </section>
      {edit && draft && (
        <>
          <SettingsForm s={draft} set={setDraft} />
          <button className="cta alt" disabled={catsOf(draft).length !== 6} onClick={() => { ls.set('triplazo-settings', draft); dispatch({ t: 'settings', settings: gameSettings(draft) }); setEdit(false); }}>Guardar ajustes</button>
        </>
      )}
      {isHost ? <button className="cta" onClick={() => dispatch({ t: 'start' })}>Empezar partida</button> : <p className="waiting">Esperando a que el anfitrión empiece…</p>}
    </div>
  );
}

const GoogleG = () => (
  <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" /><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" /><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" /><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" /></svg>
);
