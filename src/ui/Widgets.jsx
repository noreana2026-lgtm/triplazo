import React, { useEffect, useRef, useState } from 'react';
import { CATS, LVL } from '../game/constants.js';
import { shuffle } from '../game/engine.js';

export const RM = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const SPIN_MS = RM ? 800 : 3200;

export const Crown = ({ size = 14 }) => (
  <svg className="crown" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18h18l-1.6-10.5-5 4.4L12 4.5 9.6 11.9l-5-4.4z" fill="currentColor" /></svg>
);

export function Pie({ p, cats, size }) {
  const n = cats.length, R = 46;
  const P = (a) => [(50 + R * Math.sin((a * Math.PI) / 180)).toFixed(2), (50 - R * Math.cos((a * Math.PI) / 180)).toFixed(2)];
  return (
    <svg className="pie" width={size} height={size} viewBox="0 0 100 100" role="img" aria-label={`${p.q.length} de ${n} quesitos`}>
      <circle cx="50" cy="50" r="49" fill="#0b1020" />
      {cats.map((c, i) => {
        const [x0, y0] = P((i * 360) / n), [x1, y1] = P(((i + 1) * 360) / n);
        return <path key={c} d={`M50,50 L${x0},${y0} A${R},${R} 0 0 1 ${x1},${y1} Z`} fill={p.q.includes(c) ? CATS[c].col : '#262f4a'} stroke="#121829" strokeWidth="3" />;
      })}
    </svg>
  );
}

const PIPS = { 1: [[50, 50]], 2: [[30, 30], [70, 70]], 3: [[28, 28], [50, 50], [72, 72]], 4: [[30, 30], [70, 30], [30, 70], [70, 70]], 5: [[28, 28], [72, 28], [50, 50], [28, 72], [72, 72]], 6: [[30, 26], [70, 26], [30, 50], [70, 50], [30, 74], [70, 74]] };
export const Die = ({ n, size = 60 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
    <rect x="4" y="4" width="92" height="92" rx="20" fill="#f4efe4" />
    {PIPS[n].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="9" fill="#121829" />)}
  </svg>
);

export function Timer({ deadline, secs, onExpire, paused }) {
  const [now, setNow] = useState(Date.now());
  const cb = useRef(onExpire); cb.current = onExpire;
  const fired = useRef(null);
  useEffect(() => {
    if (paused) return undefined;
    let raf;
    const tick = () => {
      const t = Date.now(); setNow(t);
      if (t >= deadline) { if (fired.current !== deadline) { fired.current = deadline; cb.current && cb.current(); } return; }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [deadline, paused]);
  const left = Math.max(0, (deadline - now) / 1000);
  return (
    <div className="timerrow">
      <div className="timer"><i className={left <= 3 ? 'low' : ''} style={{ width: `${Math.min(100, (left / secs) * 100)}%` }} /></div>
      <span className="tnum">{Math.ceil(left)}</span>
    </div>
  );
}

export function Wheel({ items, spin, onSettled }) {
  const [rot, setRot] = useState(0);
  const [anim, setAnim] = useState(false);
  const seen = useRef(null);
  const cb = useRef(onSettled); cb.current = onSettled;
  useEffect(() => {
    if (!spin || seen.current === spin.id) return undefined;
    seen.current = spin.id;
    const n = items.length, seg = 360 / n;
    const center = (spin.idx + 0.5) * seg;
    const target = 360 * 5 + ((360 - center) % 360 + 360) % 360;
    const late = Date.now() - (spin.at || 0) > SPIN_MS + 500;
    if (late) { setAnim(false); setRot(target); cb.current && cb.current(); return undefined; }
    setAnim(true); setRot(target);
    const t = setTimeout(() => cb.current && cb.current(), SPIN_MS + 100);
    return () => clearTimeout(t);
  }, [spin, items.length]);
  const n = items.length, R = 150, C = 160, seg = 360 / n, fs = n <= 4 ? 16 : n <= 7 ? 13.5 : 11.5;
  const pt = (a, r) => [C + r * Math.sin((a * Math.PI) / 180), C - r * Math.cos((a * Math.PI) / 180)];
  return (
    <div className="wheelwrap">
      <div className="pointer" />
      <div className="wheel" style={{ transform: `rotate(${rot}deg)`, transition: anim ? `transform ${SPIN_MS}ms cubic-bezier(.12,.72,.1,1)` : 'none' }}>
        <svg viewBox="0 0 320 320" aria-hidden="true">
          <circle cx="160" cy="160" r="159" fill="#0b1020" />
          {items.map((it, i) => {
            const a0 = i * seg, a1 = a0 + seg, [x0, y0] = pt(a0, R), [x1, y1] = pt(a1, R), mid = a0 + seg / 2, tx = C + R * 0.6, flip = mid > 180;
            const d = n === 1 ? `M${C},${C - R} A${R},${R} 0 1 1 ${C - 0.01},${C - R} Z` : `M${C},${C} L${x0.toFixed(2)},${y0.toFixed(2)} A${R},${R} 0 ${seg > 180 ? 1 : 0} 1 ${x1.toFixed(2)},${y1.toFixed(2)} Z`;
            return (
              <g key={i}>
                <path d={d} fill={it.col} stroke="#121829" strokeWidth="3" />
                <g transform={`rotate(${mid - 90} ${C} ${C})`}>
                  <text x={tx} y={C} transform={flip ? `rotate(180 ${tx} ${C})` : undefined} textAnchor="middle" dominantBaseline="central" fontFamily="Manrope, system-ui, sans-serif" fontWeight="800" fontSize={fs} fill="#121829">{it.label}</text>
                </g>
              </g>
            );
          })}
          <circle cx="160" cy="160" r="27" fill="#121829" stroke="#f4efe4" strokeWidth="3" />
          <path d="M160 133v54M133 160h54" stroke="#ff7a29" strokeWidth="2.5" />
          <circle cx="160" cy="160" r="15" fill="none" stroke="#ff7a29" strokeWidth="2.5" />
        </svg>
      </div>
    </div>
  );
}

export const CatHead = ({ cat, label }) => (
  <div className="shead" style={{ '--c': CATS[cat].col }}><span className="label">{label}</span><h2>{CATS[cat].n}</h2></div>
);

export function Lines({ lines }) {
  return (lines || []).map((l, i) => {
    if (l.t === 'big') return <p key={i}><span className="big">{l.s}</span></p>;
    if (l.t === 'sub') return <p key={i} className="hint">{l.s}</p>;
    if (l.t === 'crown') return <p key={i} style={{ color: 'var(--gold)' }}><Crown /> {l.s}</p>;
    return <p key={i}>{l.s}</p>;
  });
}

// Pregunta respondida en privado (duelo, final, al vuelo): no enseña si aciertas.
export function PrivateQ({ q, player, secs, head, onAnswer, extra }) {
  const [opts] = useState(() => shuffle(q.o));
  const [deadline] = useState(() => Date.now() + secs * 1000);
  const done = useRef(false);
  const fin = (ok) => { if (done.current) return; done.current = true; onAnswer(ok); };
  return (
    <>
      {head}
      <div className="qcard">
        <div className="meta"><span className="pill" style={{ background: player.col }}>{player.name}</span><span className="pill lvl">{LVL[q.d]}</span>{extra}</div>
        <Timer deadline={deadline} secs={secs} onExpire={() => fin(false)} />
        <p className="q">{q.q}</p>
        <div className="opts">
          {opts.map((o, i) => (
            <button key={o} className="opt" onClick={() => fin(o === q.o[0])}><span className="k">{'ABCD'[i]}</span><span>{o}</span></button>
          ))}
        </div>
      </div>
      <p className="hint" style={{ textAlign: 'center' }}>La respuesta se desvela cuando hayáis contestado todos.</p>
    </>
  );
}

export function Handoff({ player, text, btn, onGo, head, children }) {
  return (
    <>
      {head}
      <div className="handoff"><span className="label">Pásale el móvil a</span><h2 style={{ color: player.col }}>{player.name}</h2>{text && <p>{text}</p>}</div>
      {children || <button className="cta" onClick={onGo}>{btn}</button>}
    </>
  );
}

export function TwoTap({ className, label, confirm, onConfirm }) {
  const [armed, setArmed] = useState(false);
  useEffect(() => { if (!armed) return undefined; const t = setTimeout(() => setArmed(false), 3000); return () => clearTimeout(t); }, [armed]);
  return <button className={`${className} ${armed ? 'warn' : ''}`} onClick={() => (armed ? onConfirm() : setArmed(true))}>{armed ? confirm : label}</button>;
}
