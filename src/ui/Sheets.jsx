import React, { useEffect, useState } from 'react';
import { CATS, MODE, LVL } from '../game/constants.js';
import { QBY, betOptions } from '../game/engine.js';
import { CatHead, Crown, Handoff, Lines, Pie, PrivateQ, Timer, Wheel } from './Widgets.jsx';

const name = (G, i) => G.players[i]?.name || '';
const Waiting = ({ text }) => <p className="waiting">{text}</p>;

export function SheetBody({ ctx }) {
  const { G } = ctx;
  if (G.final) return <FinalSheet ctx={ctx} />;
  const S = G.sheet;
  if (!S) return null;
  if (S.k === 'pick') return <PickSheet ctx={ctx} S={S} />;
  if (S.k === 'rival') return <RivalSheet ctx={ctx} S={S} />;
  if (S.k === 'cat') return <CatSheet key={S.id} ctx={ctx} S={S} />;
  if (S.k === 'q') return <QSheet ctx={ctx} S={S} />;
  if (S.k === 'vuelo') return <VueloSheet key={S.id} ctx={ctx} S={S} />;
  if (S.k === 'duel') return <DuelSheet key={S.id} ctx={ctx} S={S} />;
  return null;
}

function PickSheet({ ctx, S }) {
  const { G, dispatch, can } = ctx;
  const mine = can(G.turn);
  return (
    <>
      <div className="shead" style={{ '--c': S.super ? 'var(--gold)' : '#f4efe4' }}>
        <span className="label">{S.super ? 'Comodín de quesito' : 'Comodín'}</span><h2>Elige categoría</h2>
      </div>
      {S.super && <p className="note gold"><Crown /> Eliges la categoría y, si aciertas, te llevas su quesito. Si ya lo tiene otro, hay duelo.</p>}
      {mine ? (
        <div className="catgrid">
          {G.settings.cats.map((c) => (
            <button key={c} className="catbtn" style={{ '--c': CATS[c].col }} onClick={() => dispatch({ t: 'pick', cat: c })}>
              {CATS[c].n}{S.super && G.players[G.turn].q.includes(c) ? ' ✓' : ''}
            </button>
          ))}
        </div>
      ) : <Waiting text={`${name(G, G.turn)} está eligiendo categoría…`} />}
    </>
  );
}

function RivalSheet({ ctx, S }) {
  const { G, dispatch, can } = ctx;
  return (
    <>
      <CatHead cat={S.cat} label="Duelo por el quesito" />
      <p className="note">Varios jugadores tienen este quesito. {name(G, G.turn)}, ¿a quién retas?</p>
      {can(G.turn) ? (
        <div className="catgrid">
          {S.owners.map((k) => <button key={k} className="catbtn" style={{ '--c': G.players[k].col }} onClick={() => dispatch({ t: 'rival', o: k })}>{G.players[k].name}</button>)}
        </div>
      ) : <Waiting text={`${name(G, G.turn)} está eligiendo rival…`} />}
    </>
  );
}

function CatSheet({ ctx, S }) {
  const { G, dispatch, can } = ctx;
  const mine = can(G.turn);
  const single = S.modes.length === 1;
  const [settled, setSettled] = useState(single || (S.spin && Date.now() - S.spin.at > 4000));
  const m = S.mode && settled ? MODE[S.mode] : null;
  return (
    <>
      <CatHead cat={S.cat} label={S.crown ? 'Casilla de quesito' : 'Categoría'} />
      {S.crown && <p className="note gold"><Crown /> Si aciertas, te llevas el quesito de {CATS[S.cat].n}.</p>}
      {S.note && !S.crown && <p className="note">{S.note}</p>}
      {!single && (
        <>
          <div className="label" style={{ textAlign: 'center' }}>Ruleta de modo</div>
          <Wheel items={S.modes.map((id) => ({ label: MODE[id].s, col: MODE[id].col }))} spin={S.spin} onSettled={() => setSettled(true)} />
        </>
      )}
      {m && <div className="modecard" style={{ '--c': m.col }}><div className="label">Modo</div><h3>{m.n}</h3><p>{m.d}</p></div>}
      {!mine && <Waiting text={!S.spin && !single ? `${name(G, G.turn)} va a girar la ruleta…` : m ? `${name(G, G.turn)} está a punto de empezar…` : 'Girando…'} />}
      {mine && !S.mode && <button className="cta" onClick={() => dispatch({ t: 'spin' })}>Girar ruleta</button>}
      {mine && m && (m.id === 'apuesta' ? (
        <>
          <div className="label">¿Cuánto apuestas?</div>
          <div className="bets">{[50, 100, 200].map((b) => <button key={b} className="cta" onClick={() => dispatch({ t: 'start_q', bet: b })}>{b}</button>)}</div>
        </>
      ) : <button className="cta" onClick={() => dispatch({ t: 'start_q' })}>Jugar</button>)}
    </>
  );
}

function QSheet({ ctx, S }) {
  const { G, dispatch, can, isHost } = ctx;
  const q = QBY[S.qid], m = MODE[S.mode];
  const ans = G.players[S.answerer];
  const canAns = can(S.answerer) && !S.res;
  const stealing = S.mode === 'rebote' && S.answerer !== G.turn && !S.res;
  const reveal = S.res && S.res.showAnswer;
  const onExpire = () => {
    if (can(S.answerer)) dispatch({ t: 'timeout', deadline: S.deadline });
    else if (isHost) setTimeout(() => dispatch({ t: 'timeout', deadline: S.deadline }), 4000);
  };
  let body;
  if (S.mode === 'vf') {
    body = (
      <>
        <div className="section"><div className="label">Respuesta propuesta</div><div className="prop">{S.tf.opt}</div></div>
        <div className="vf">
          {[true, false].map((v) => (
            <button key={String(v)} className={`opt ${S.res && S.res.vfPick === v ? '' : ''} ${S.res ? (v === S.tf.truth ? 'ok' : '') : ''}`} disabled={!canAns} onClick={() => dispatch({ t: 'answer', val: v })}>{v ? 'Verdadero' : 'Falso'}</button>
          ))}
        </div>
      </>
    );
  } else if (S.mode === 'voz') {
    body = !S.revealed ? (
      <div className="section">
        <p className="hint">Di la respuesta en voz alta. Cuando la tengas (o se acabe el tiempo), descubre la respuesta y el grupo decide si vale.</p>
        {can(S.answerer) ? <button className="cta alt" onClick={() => dispatch({ t: 'reveal' })}>Ver respuesta</button> : <Waiting text={`${ans.name} está respondiendo en voz alta…`} />}
      </div>
    ) : (
      <div className="section">
        {S.timedOut && <p className="hint">Se acabó el tiempo.</p>}
        <div className="label">Respuesta</div><div className="prop">{q.o[0]}</div>
        {!S.res && <div className="vf"><button className="opt" onClick={() => dispatch({ t: 'answer', val: true })}>Acertó</button><button className="opt" onClick={() => dispatch({ t: 'answer', val: false })}>Falló</button></div>}
      </div>
    );
  } else {
    body = (
      <div className="opts">
        {S.opts.map((o, i) => {
          const gone = S.elim.includes(o);
          let cls = 'opt';
          if (gone && !(S.res && S.choice === o)) cls += ' gone';
          if (reveal && o === q.o[0]) cls += ' ok';
          if (S.res && !S.res.ok && S.choice === o) cls += ' ko';
          return <button key={o} className={cls} disabled={!canAns || gone} onClick={() => dispatch({ t: 'answer', choice: o })}><span className="k">{'ABCD'[i]}</span><span>{o}</span></button>;
        })}
      </div>
    );
  }
  const nextLabel = () => {
    const n = S.res.next;
    if (n === 'complete') return '¡6 quesitos!';
    if (n === 'continue') return 'Sigue tirando';
    return `Turno de ${name(G, (G.turn + 1) % G.players.length)}`;
  };
  const title = S.res ? (S.res.ok ? '¡Dentro!' : S.res.timeout ? '¡Airball!' : 'Al aro') : '';
  return (
    <>
      <CatHead cat={S.cat} label={S.crown ? 'Pregunta de quesito' : 'Pregunta'} />
      {stealing && <p className="steal">Rebote para <b>{ans.name}</b>{S.miss ? ` · ${name(G, S.miss.by)} ${S.miss.timeout ? 'se quedó sin tiempo' : 'falló'}` : ''}. 10 segundos para robarla.</p>}
      <div className="qcard">
        <div className="meta">
          <span className="pill" style={{ background: ans.col }}>{ans.name}</span>
          <span className="pill" style={{ background: m.col }}>{m.n}{S.mode === 'apuesta' ? ` · ${S.bet}` : ''}{S.mode === 'doble' ? ` · ${S.step} de 2` : ''}</span>
          <span className="pill lvl">{LVL[q.d]}</span>
        </div>
        {!S.res && !(S.mode === 'voz' && S.revealed) && <Timer key={S.deadline} deadline={S.deadline} secs={S.secs} onExpire={onExpire} />}
        <p className="q">{q.q}</p>
        {body}
      </div>
      {S.res && (
        <div className={`fb ${S.res.ok ? 'ok' : 'ko'}`}>
          <h3>{title}</h3>
          <Lines lines={S.res.lines} />
          {!S.res.ok && S.mode !== 'voz' && <p>Respuesta: <b>{q.o[0]}</b>.</p>}
          <p className="efact"><b>Dato:</b> {q.e}</p>
          {can(G.turn) || isHost ? <button className={`cta ${S.res.ok ? '' : 'alt'}`} onClick={() => dispatch({ t: 'continue' })}>{nextLabel()}</button> : <Waiting text={`Esperando a ${name(G, G.turn)}…`} />}
        </div>
      )}
    </>
  );
}

// Quién responde ahora en modo un solo móvil: el primero pendiente, empezando por el jugador en turno.
function pendingOrder(G, list) {
  const n = G.players.length;
  const order = Array.from({ length: n }, (_, k) => (G.turn + k) % n);
  return order.filter((i) => list.includes(i));
}

function VueloSheet({ ctx, S }) {
  const { G, dispatch, can, local, myIdx, isHost } = ctx;
  const q = QBY[S.qid];
  const pending = pendingOrder(G, G.players.map((_, i) => i).filter((i) => S.ans[i] === undefined));
  const [ack, setAck] = useState(null);
  const head = <CatHead cat={S.cat} label={`Al vuelo${S.crown ? ' · quesito' : ''}`} />;
  if (S.res) {
    return (
      <>
        {head}
        <div className="qcard"><p className="q">{q.q}</p><div className="prop">{q.o[0]}</div></div>
        <div className="ftable">{G.players.map((p, i) => <div key={i} className="frow"><b><i className="pdot" style={{ background: p.col }} />{p.name}</b><span className={`d ${S.ans[i] ? 'y' : 'n'}`}>{S.ans[i] ? '✓' : '✗'}</span><span /></div>)}</div>
        <div className={`fb ${S.res.ok ? 'ok' : 'ko'}`}>
          <h3>{S.res.ok ? '¡Dentro!' : 'Al aro'}</h3>
          <Lines lines={S.res.lines} />
          <p className="efact"><b>Dato:</b> {q.e}</p>
          {can(G.turn) || isHost ? <button className="cta" onClick={() => dispatch({ t: 'continue' })}>{S.res.next === 'continue' ? 'Sigue tirando' : S.res.next === 'complete' ? '¡6 quesitos!' : `Turno de ${name(G, (G.turn + 1) % G.players.length)}`}</button> : <Waiting text={`Esperando a ${name(G, G.turn)}…`} />}
        </div>
      </>
    );
  }
  if (local) {
    const who = pending[0];
    if (ack !== who) return <Handoff head={head} player={G.players[who]} text="Todos respondéis la misma pregunta; los demás no miran." btn={`Responde ${G.players[who].name}`} onGo={() => setAck(who)} />;
    return <PrivateQ key={who} q={q} player={G.players[who]} secs={20} head={head} onAnswer={(ok) => dispatch({ t: 'vans', by: who, ok })} />;
  }
  if (myIdx !== null && S.ans[myIdx] === undefined) {
    return <PrivateQ key={S.id} q={q} player={G.players[myIdx]} secs={20} head={head} onAnswer={(ok) => dispatch({ t: 'vans', by: myIdx, ok })} />;
  }
  return <>{head}<Waiting text={`Esperando respuestas: ${pending.map((i) => name(G, i)).join(', ')}`} /></>;
}

function DuelSheet({ ctx, S }) {
  const { G, dispatch, can, local, myIdx } = ctx;
  const pa = G.players[S.a], pb = G.players[S.b];
  const [ack, setAck] = useState(null);
  const head = <CatHead cat={S.cat} label="Duelo por el quesito" />;
  const total = S.qs.length;
  if (S.stage === 'intro') {
    return (
      <>
        {head}
        <div className="duelvs"><span style={{ color: pa.col }}>{pa.name}</span><b>vs</b><span style={{ color: pb.col }}>{pb.name}</span></div>
        <p className="note">{pa.name} cae en la corona de {CATS[S.cat].n}, que ya tiene {pb.name}. Si {pa.name} gana el duelo, le quita el quesito.</p>
        <p className="hint">4 preguntas ({LVL[S.L]}), las mismas para los dos. Los resultados se ven al final. Si hay empate, muerte súbita subiendo la dificultad hasta Extremo.</p>
        {can(S.a) || can(S.b) ? <button className="cta" onClick={() => dispatch({ t: 'duel_go' })}>Empezar duelo</button> : <Waiting text="Esperando a los duelistas…" />}
      </>
    );
  }
  if (S.stage === 'play') {
    const need = [S.a, S.b].filter((i) => S.ans[i].length < total);
    const label = (k) => (k < 4 ? `Duelo · pregunta ${k + 1} de 4` : `Muerte súbita · ${LVL[QBY[S.qs[k]].d]}`);
    const play = (who) => {
      const k = S.ans[who].length;
      return <PrivateQ key={`${who}-${k}`} q={QBY[S.qs[k]]} player={G.players[who]} secs={15} head={<CatHead cat={S.cat} label={label(k)} />} onAnswer={(ok) => dispatch({ t: 'dans', by: who, k, ok })} />;
    };
    if (local) {
      const who = need[0];
      const key = `${who}-${total}`;
      if (ack !== key) return <Handoff head={head} player={G.players[who]} text={who === S.a ? 'Empiezas tú. El rival no mira.' : `${G.players[S.a].name} ya ha respondido. Te tocan las mismas preguntas.`} btn={`Empieza ${G.players[who].name}`} onGo={() => setAck(key)} />;
      return play(who);
    }
    if (myIdx !== null && need.includes(myIdx)) return play(myIdx);
    return <>{head}<Waiting text={`Duelo en marcha: ${need.map((i) => name(G, i)).join(' y ')} respondiendo…`} /></>;
  }
  const sa = S.ans[S.a].filter(Boolean).length, sb = S.ans[S.b].filter(Boolean).length;
  const table = (
    <div className="dtable">
      <span /><span className="h" style={{ color: pa.col }}>{pa.name}</span><span className="h" style={{ color: pb.col }}>{pb.name}</span>
      {S.qs.map((id, k) => (
        <React.Fragment key={id}>
          <div className="qq">{QBY[id].q}<small>{QBY[id].o[0]}</small></div>
          <span className={`mk ${S.ans[S.a][k] ? 'y' : 'n'}`}>{S.ans[S.a][k] ? '✓' : '✗'}</span>
          <span className={`mk ${S.ans[S.b][k] ? 'y' : 'n'}`}>{S.ans[S.b][k] ? '✓' : '✗'}</span>
        </React.Fragment>
      ))}
      <span className="label">Total</span><span className="tot">{sa}</span><span className="tot">{sb}</span>
    </div>
  );
  if (S.stage === 'tie') {
    return (
      <>
        <CatHead cat={S.cat} label="Duelo · resultados" />{table}
        <p className="note">Empate a {sa}. Muerte súbita: una pregunta para cada uno a nivel <b>{LVL[Math.min(4, S.lvl + 1)]}</b>.</p>
        {can(S.a) || can(S.b) ? <button className="cta" onClick={() => dispatch({ t: 'duel_sd' })}>Muerte súbita</button> : <Waiting text="Esperando a los duelistas…" />}
      </>
    );
  }
  const pw = G.players[S.res.win];
  return (
    <>
      <CatHead cat={S.cat} label="Duelo · resultados" />{table}
      <div className="fb ok">
        <h3 style={{ color: pw.col }}>Gana {pw.name}</h3>
        <Lines lines={S.res.lines} />
        {can(G.turn) || ctx.isHost ? <button className="cta" onClick={() => dispatch({ t: 'continue' })}>{S.res.next === 'continue' ? 'Sigue tirando' : S.res.next === 'complete' ? '¡6 quesitos!' : `Turno de ${name(G, (G.turn + 1) % G.players.length)}`}</button> : <Waiting text={`Esperando a ${name(G, G.turn)}…`} />}
      </div>
    </>
  );
}

function Standings({ G }) {
  const rk = G.players.map((p, i) => ({ p, i })).sort((x, y) => y.p.score - x.p.score);
  return (
    <div className="ftable">
      {rk.map(({ p, i }) => <div key={i} className="frow"><b><Pie p={p} cats={G.settings.cats} size={22} />{p.name}</b><span className="d" style={{ color: 'var(--muted)' }}>{p.q.length}/6</span><span className="s">{p.score}</span></div>)}
    </div>
  );
}

function FinalSheet({ ctx }) {
  const { G, dispatch, can, local, myIdx, isHost } = ctx;
  const F = G.final, P = G.players, n = G.settings.cats.length;
  const [ack, setAck] = useState(null);
  const anyone = local || isHost || myIdx !== null;
  const goldHead = (sub, title) => <div className="shead" style={{ '--c': 'var(--gold)' }}><span className="label">{sub}</span><h2>{title}</h2></div>;
  if (F.stage === 'intro') {
    return (
      <>
        {goldHead('Ronda final', 'Todo a apuestas')}
        <p className="note">{F.reason}</p>
        <p>{n} preguntas, una de cada categoría, iguales para todos. Antes de ver cada pregunta, cada jugador apuesta en secreto. Si aciertas, sumas lo apostado; si fallas, lo pierdes.</p>
        <p className="hint">A partir de aquí los marcadores se ocultan. Solo se enseña cómo vais después de la pregunta 3, y al final.</p>
        <div className="label">Puntos de partida</div><Standings G={G} />
        {anyone && <button className="cta gold" onClick={() => dispatch({ t: 'fnext' })}>Empezar ronda final</button>}
      </>
    );
  }
  const q = F.qid != null ? QBY[F.qid] : null;
  const head = q && <CatHead cat={F.cat} label={`Ronda final · ${F.k + 1} de ${n}`} />;
  if (F.stage === 'mid') {
    return (
      <>
        {goldHead('Ronda final · a mitad', 'Así vais')}
        <Standings G={G} />
        <p className="hint">Esta es la única referencia hasta el final.</p>
        {anyone && <button className="cta gold" onClick={() => dispatch({ t: 'fnext' })}>Siguiente pregunta</button>}
      </>
    );
  }
  if (F.stage === 'reveal') {
    const last = F.k >= n - 1;
    return (
      <>
        {head}
        <div className="qcard"><p className="q">{q.q}</p><div className="prop">{q.o[0]}</div><p className="efact"><b>Dato:</b> {q.e}</p></div>
        <div className="ftable">{P.map((p, i) => <div key={i} className="frow"><b><i className="pdot" style={{ background: p.col }} />{p.name}</b><span className={`d ${F.ans[i] ? 'y' : 'n'}`}>{F.ans[i] ? '✓ Acierta' : '✗ Falla'}</span><span /></div>)}</div>
        {anyone && <button className={`cta ${last ? 'gold' : ''}`} onClick={() => dispatch({ t: 'fnext' })}>{last ? 'Ver campeón' : F.k === 2 && !F.midShown ? 'Ver cómo vamos' : 'Siguiente pregunta'}</button>}
      </>
    );
  }
  // play
  const pending = pendingOrder(G, P.map((_, i) => i).filter((i) => F.ans[i] === undefined));
  const BetPick = ({ who }) => (
    <div className="bets4">
      {betOptions(P[who].score).map(([nm, amt], k) => (
        <button key={nm} className={`cta ${k === 3 ? 'gold' : 'alt'}`} onClick={() => dispatch({ t: 'fbet', by: who, amt })}>{nm}<small>{amt} pts</small></button>
      ))}
    </div>
  );
  const turnFor = (who) => {
    if (F.bets[who] === undefined) {
      return (
        <>
          {head}
          <div className="handoff"><span className="label">Apuesta de</span><h2 style={{ color: P[who].col }}>{P[who].name}</h2><p>Tienes {P[who].score} puntos. ¿Cuánto apuestas en {CATS[F.cat].n}?</p></div>
          <BetPick who={who} />
        </>
      );
    }
    return <PrivateQ key={`${F.qseq}-${who}`} q={q} player={P[who]} secs={20} head={head} extra={<span className="pill lvl">Apuesta {F.bets[who]}</span>} onAnswer={(ok) => dispatch({ t: 'fans', by: who, ok })} />;
  };
  if (local) {
    const who = pending[0];
    const key = `${F.qseq}-${who}`;
    if (ack !== key) return <Handoff head={head} player={P[who]} text="Apuestas y respondes sin que los demás miren." btn="Soy yo" onGo={() => setAck(key)} />;
    return turnFor(who);
  }
  if (myIdx !== null && pending.includes(myIdx)) return turnFor(myIdx);
  return <>{head}<Waiting text={`Esperando a: ${pending.map((i) => name(G, i)).join(', ')}`} /></>;
}
