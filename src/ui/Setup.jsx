import React from 'react';
import { BOARDS, CATS, MODES, NEW_MODES, PACKS, PCOL } from '../game/constants.js';

export const DEFAULT_SETTINGS = { pack: 'deportes', custom: ['nba', 'basket', 'futbol', 'influ', 'geo', 'memes'], diff: 'mix', endMode: 'final', board: 'estandar', modes: MODES.map((m) => m.id) };
export const catsOf = (s) => (s.pack === 'custom' ? s.custom.slice() : PACKS[s.pack].c.slice());

export function SettingsForm({ s, set, players, setPlayers }) {
  const cats = catsOf(s);
  const upd = (patch) => set({ ...s, ...patch });
  const toggleMode = (id) => {
    const has = s.modes.includes(id);
    const modes = has ? s.modes.filter((x) => x !== id) : [...s.modes, id];
    if (modes.length) upd({ modes });
  };
  return (
    <>
      {players && (
        <section className="section">
          <div className="label">Jugadores · os pasáis el móvil</div>
          <div className="players">
            {players.map((p, i) => (
              <div className="prow" key={i}>
                <span className="pdot" style={{ background: PCOL[i] }} />
                <input id={`p${i}`} value={p} maxLength={14} aria-label={`Jugador ${i + 1}`} onChange={(e) => setPlayers(players.map((x, k) => (k === i ? e.target.value : x)))} />
                {players.length > 1 && <button className="iconbtn" aria-label="Quitar jugador" onClick={() => setPlayers(players.filter((_, k) => k !== i))}>×</button>}
              </div>
            ))}
          </div>
          {players.length < 6 && <button className="ghost" onClick={() => setPlayers([...players, `Jugador ${players.length + 1}`])}>+ Añadir jugador</button>}
        </section>
      )}
      <section className="section">
        <div className="label">Tipo de trivial · 6 categorías</div>
        <div className="packs">
          {Object.entries(PACKS).map(([k, p]) => (
            <button key={k} className="pack" aria-pressed={s.pack === k} onClick={() => upd({ pack: k })}>
              <h3>{p.n}</h3><p>{p.d}</p>
              <div className="dots">{(p.c || s.custom).map((c) => <span key={c} className="dot" style={{ background: CATS[c].col }} />)}</div>
            </button>
          ))}
        </div>
        <div className="chips">
          {(s.pack === 'custom' ? Object.keys(CATS) : cats).map((c) => (
            <button key={c} className="chip" disabled={s.pack !== 'custom'} aria-pressed={s.pack === 'custom' ? s.custom.includes(c) : undefined}
              onClick={() => {
                const i = s.custom.indexOf(c);
                if (i >= 0) upd({ custom: s.custom.filter((x) => x !== c) });
                else if (s.custom.length < 6) upd({ custom: [...s.custom, c] });
              }}>
              <span className="dot" style={{ background: CATS[c].col }} />{CATS[c].n}
            </button>
          ))}
        </div>
        {s.pack === 'custom' && <p className="hint">Elige exactamente 6 (llevas {s.custom.length}).</p>}
      </section>
      <section className="section">
        <div className="label">Tablero</div>
        <div className="seg" style={{ '--n': 3 }}>
          {Object.entries(BOARDS).map(([k, b]) => <button key={k} aria-pressed={s.board === k} onClick={() => upd({ board: k })}>{b.n}<small>{b.d}</small></button>)}
        </div>
      </section>
      <section className="section">
        <div className="label">Modos en la ruleta · {s.modes.length} activos</div>
        <div className="row2">
          <button className="ghost" onClick={() => upd({ modes: ['clasica'] })}>Solo clásica</button>
          <button className="ghost" onClick={() => upd({ modes: MODES.map((m) => m.id) })}>Todos</button>
        </div>
        <div className="modegrid">
          {MODES.map((m) => (
            <button key={m.id} className="modechip" aria-pressed={s.modes.includes(m.id)} onClick={() => toggleMode(m.id)} style={{ '--c': m.col }}>
              <span className="mtitle"><i className="dot" style={{ background: m.col }} />{m.n}{NEW_MODES.includes(m.id) && <em>nuevo</em>}</span>
              <span className="mdesc">{m.d}</span>
            </button>
          ))}
        </div>
        <p className="hint">Rebote y Al vuelo solo salen con 2 jugadores o más.</p>
      </section>
      <section className="section">
        <div className="label">Dificultad</div>
        <div className="seg" style={{ '--n': 5 }}>
          {[['1', 'Fácil'], ['2', 'Media'], ['3', 'Difícil'], ['4', 'Extremo'], ['mix', 'Mixta']].map(([v, n]) => (
            <button key={v} aria-pressed={String(s.diff) === v} onClick={() => upd({ diff: v === 'mix' ? 'mix' : +v })}>{n}</button>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="label">Al completar los 6 quesitos</div>
        <div className="seg" style={{ '--n': 2 }}>
          <button aria-pressed={s.endMode === 'final'} onClick={() => upd({ endMode: 'final' })}>Ronda final<small>todos a apuestas</small></button>
          <button aria-pressed={s.endMode === 'direct'} onClick={() => upd({ endMode: 'direct' })}>Victoria directa<small>como el Trivial</small></button>
        </div>
      </section>
    </>
  );
}

export const gameSettings = (s) => ({ cats: catsOf(s), diff: s.diff, endMode: s.endMode, board: s.board, modes: s.modes });
