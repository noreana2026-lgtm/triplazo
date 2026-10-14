import React, { useEffect, useMemo, useRef, useState } from 'react';
import { BOARDS, CATS } from '../game/constants.js';
import { cellOf } from '../game/board.js';
import { Crown, Die, Pie, RM, TwoTap } from './Widgets.jsx';
import { SheetBody } from './Sheets.jsx';
import Rules from './Rules.jsx';

function useDiceAnim(G) {
  const [face, setFace] = useState(null);
  const seen = useRef(G.rollId);
  useEffect(() => {
    if (!G.rollId || seen.current === G.rollId) return undefined;
    seen.current = G.rollId;
    if (RM) return undefined;
    let t = 0;
    const iv = setInterval(() => { setFace(1 + Math.floor(Math.random() * 6)); if (++t >= 8) { clearInterval(iv); setFace(null); } }, 80);
    return () => { clearInterval(iv); setFace(null); };
  }, [G.rollId]);
  return face;
}

function useMoveAnim(G) {
  const [over, setOver] = useState(null); // {pi,pos}
  const seen = useRef(G.anim ? G.anim.id : null);
  useEffect(() => {
    const a = G.anim;
    if (!a || seen.current === a.id) return undefined;
    seen.current = a.id;
    const n = G.tiles.length;
    if (RM) return undefined;
    let k = 0;
    setOver({ pi: a.pi, pos: a.from });
    const iv = setInterval(() => {
      k++;
      if (k > a.steps) { clearInterval(iv); setOver(null); return; }
      setOver({ pi: a.pi, pos: (a.from + a.dir * k + n * 10) % n });
    }, 150);
    return () => { clearInterval(iv); setOver(null); };
  }, [G.anim && G.anim.id]);
  const pending = !RM && G.anim && seen.current !== G.anim.id;
  return { over, pending };
}

export default function Game({ ctx, roomCode, onExit }) {
  const { G, dispatch, can } = ctx;
  const [rules, setRules] = useState(false);
  const face = useDiceAnim(G);
  const { over, pending } = useMoveAnim(G);
  const [sheetHold, setSheetHold] = useState(false);
  useEffect(() => {
    if (over) { setSheetHold(true); return undefined; }
    const t = setTimeout(() => setSheetHold(false), RM ? 0 : 250);
    return () => clearTimeout(t);
  }, [over]);
  const hideScores = !!G.final;
  const B = BOARDS[G.settings.board];
  const P = G.players;
  const posOf = (i) => (over && over.pi === i ? over.pos : P[i].pos);
  const myTurn = can(G.turn);
  const choosing = G.phase === 'choose' && myTurn && !face;
  const showSheet = (G.sheet || G.final) && !sheetHold && !pending && !face;

  useEffect(() => { document.body.style.overflow = showSheet || rules ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [showSheet, rules]);

  const tiles = useMemo(() => G.tiles.map((t, i) => {
    const [r, c] = cellOf(i, G.settings.board);
    let inner = null, lab = '';
    if (t.cat) {
      lab = CATS[t.cat].n;
      inner = t.type === 'crown' ? <><span className="ic"><Crown size={17} /></span><span className="tl">{CATS[t.cat].ab}</span></> : <span className="tl">{CATS[t.cat].ab}</span>;
      if (t.type === 'crown') lab = 'Quesito de ' + lab;
    } else if (t.type === 'start') { inner = <span className="tl">SALIDA</span>; lab = 'Salida'; }
    else if (t.type === 'roll') { inner = <><span className="ic">↻</span><span className="tl">TIRA</span></>; lab = 'Tira otra vez'; }
    else if (t.type === 'wild') { inner = <><span className="ic">★</span><span className="tl">ELIGE</span></>; lab = 'Comodín'; }
    else { inner = <><span className="ic"><Crown size={15} />★</span><span className="tl">QUESITO</span></>; lab = 'Comodín de quesito'; }
    return { t, r, c, inner, lab };
  }), [G.tiles, G.settings.board]);

  const cur = P[G.turn];
  return (
    <div className="app">
      <div className="gtop">
        <h1 className="logo sm">Tripla<b>zo</b></h1>
        <div className="gbtns">
          {roomCode && <span className="tag">Sala {roomCode}</span>}
          <button className="mini" onClick={() => setRules(true)}>Reglas</button>
          {!G.final && <TwoTap className="mini gold" label="Ronda final" confirm="¿Seguro?" onConfirm={() => dispatch({ t: 'final' })} />}
          <TwoTap className="mini" label="Salir" confirm="¿Salir?" onConfirm={onExit} />
        </div>
      </div>
      <div className="sboard">
        {P.map((p, i) => (
          <div key={p.id} className={`pl ${i === G.turn ? 'on' : ''}`}>
            <Pie p={p} cats={G.settings.cats} size={30} />
            <span className="pmeta"><span className="nm"><i className="pdot" style={{ background: p.col }} />{p.name}</span><span className="sc">{hideScores ? '—' : p.score}</span></span>
          </div>
        ))}
      </div>
      <div className={`boardwrap b-${G.settings.board}`}>
        <div className={`board ${choosing ? 'choosing' : ''}`} style={{ gridTemplateColumns: `repeat(${B.w},1fr)`, gridTemplateRows: `repeat(${B.h},1fr)`, aspectRatio: `${B.w}/${B.h}` }}>
          {tiles.map(({ t, r, c, inner, lab }, i) => {
            const tg = choosing && G.targets.includes(i);
            const toks = P.map((p, k) => (posOf(k) === i ? <span key={p.id} className="tok" style={{ '--p': p.col }}>{(p.name[0] || '?').toUpperCase()}</span> : null));
            const go = () => tg && dispatch({ t: 'move', dest: i });
            return (
              <div key={i} className={`tile t-${t.type}${tg ? ' target' : ''}`} style={{ gridRow: r + 1, gridColumn: c + 1, '--c': t.cat ? CATS[t.cat].col : undefined }}
                role={tg ? 'button' : undefined} tabIndex={tg ? 0 : undefined} aria-label={tg ? `Ir a ${lab}` : lab}
                onClick={go} onKeyDown={(e) => { if (tg && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); go(); } }}>
                {inner}<span className="toks">{toks}</span>
              </div>
            );
          })}
          <div className="center" style={{ gridRow: `2/${B.h}`, gridColumn: `2/${B.w}` }}>
            <div className="cwho"><span className="label">Turno de</span><b style={{ color: cur.col }}>{cur.name}</b></div>
            <Pie p={cur} cats={G.settings.cats} size={G.settings.board === 'rapido' ? 60 : 72} />
            {cur.streak > 0 && <span className="streak">Racha ×{cur.streak}</span>}
            {G.phase === 'roll' && !G.sheet && myTurn && !face
              ? <button className="dice" onClick={() => dispatch({ t: 'roll' })} aria-label="Tirar dado"><Die n={G.dice || 6} /><span>Tirar</span></button>
              : <div className={`dice ${face ? 'rolling' : ''}`}><Die n={face || G.dice || 6} /></div>}
            {G.phase === 'roll' && !myTurn && <p className="cmsg">Esperando a {cur.name}…</p>}
            {choosing && <p className="cmsg">Elige una de las casillas que brillan</p>}
            {G.phase === 'choose' && !myTurn && !face && <p className="cmsg">{cur.name} está eligiendo casilla…</p>}
            {G.msg && G.phase === 'roll' && <p className="cmsg hot">{G.msg}</p>}
          </div>
        </div>
      </div>
      <div className="legend">
        {G.settings.cats.map((c) => <span key={c}><i className="dot" style={{ background: CATS[c].col }} />{CATS[c].n}</span>)}
        <span><span style={{ color: 'var(--gold)' }}><Crown /></span>Quesito</span><span>★ Comodín</span><span><Crown />★ Comodín de quesito</span><span>↻ Tira otra vez</span>
      </div>
      {showSheet && <div className="sheet"><div className="sheet-in"><SheetBody ctx={ctx} /></div></div>}
      {rules && <div className="sheet"><div className="sheet-in"><div className="shead" style={{ '--c': 'var(--gold)' }}><span className="label">Triplazo</span><h2>Reglas</h2></div><Rules /><button className="cta alt" onClick={() => setRules(false)}>Volver al tablero</button></div></div>}
    </div>
  );
}

export function EndScreen({ G, onRematch, onHome, rematchLabel }) {
  const rk = G.players.map((p, i) => ({ p, i }));
  const direct = G.endInfo && G.endInfo.mode === 'direct';
  if (direct) rk.sort((x, y) => (y.i === G.endInfo.winner) - (x.i === G.endInfo.winner) || y.p.q.length - x.p.q.length || y.p.score - x.p.score);
  else rk.sort((x, y) => y.p.score - x.p.score);
  const w = rk[0].p, tie = !direct && rk[1] && rk[1].p.score === w.score;
  return (
    <div className="app">
      <div className="brand"><h1 className="logo">Tripla<b>zo</b></h1><span className="tag">Fin de partida</span></div>
      <div className="winner">
        <span className="label">{direct ? '6 quesitos · victoria directa' : 'Gana la ronda final'}</span>
        {!tie && <Pie p={w} cats={G.settings.cats} size={96} />}
        <h2>{tie ? 'Empate' : w.name}</h2>
      </div>
      <div className="rank">
        {rk.map(({ p }, i) => <div key={p.id} className="rk"><span className="pos">{i + 1}</span><Pie p={p} cats={G.settings.cats} size={30} /><b>{p.name}</b><span className="pts">{p.score}</span></div>)}
      </div>
      <div className="row2">
        {onRematch ? <button className="cta" onClick={onRematch}>{rematchLabel || 'Revancha'}</button> : <span />}
        <button className="cta alt" onClick={onHome}>Inicio</button>
      </div>
    </div>
  );
}
