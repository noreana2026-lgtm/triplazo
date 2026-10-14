// Motor del juego: estado serializable + reducer puro-ish.
// Se usa igual en un solo móvil (estado local) y online (estado en Supabase con control de versión).
import Q from '../data/questions.js';
import { CATS, MODE, LMULT, PCOL } from './constants.js';
import { buildBoard } from './board.js';

export const QBY = Object.fromEntries(Q.map((q) => [q.id, q]));
export const rnd = (a) => a[Math.floor(Math.random() * a.length)];
export const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const r10 = (x) => Math.round(x / 10) * 10;
export const pts = (q, mode) => r10(100 * LMULT[q.d] * (MODE[mode] ? MODE[mode].m : 1));
export const betOptions = (score) => [
  ['Nada', 0], ['25%', Math.max(100, r10(score * 0.25))], ['50%', Math.max(100, r10(score * 0.5))], ['Todo', Math.max(100, score)],
];

const N = (G) => G.tiles.length;

function levelFor(G) { const d = G.settings.diff; return d === 'mix' ? rnd([1, 2, 2, 3, 3, 4]) : d; }

function pickQ(G, cat, lvl, exclude = []) {
  const used = new Set(G.used);
  const ok = (q) => q.c === cat && !used.has(q.id) && !exclude.includes(q.id);
  for (const dd of [0, 1, -1, 2, -2, 3, -3]) {
    const pool = Q.filter((q) => ok(q) && q.d === lvl + dd);
    if (pool.length) { const q = rnd(pool); G.used.push(q.id); return q; }
  }
  G.used = G.used.filter((id) => QBY[id].c !== cat);
  const pool = Q.filter((q) => q.c === cat && !exclude.includes(q.id));
  const q = rnd(pool); G.used.push(q.id); return q;
}

export function activeModes(G) {
  const multi = G.players.length > 1;
  const ms = G.settings.modes.filter((m) => MODE[m] && (multi || !MODE[m].multi));
  return ms.length ? ms : ['clasica'];
}

// ---------- creación ----------
export function makeLobby(settings, host) {
  return { v: 3, status: 'lobby', host: host.id, settings, players: [mkPlayer(host, 0)], seq: 0 };
}
function mkPlayer(p, i) { return { id: p.id, name: p.name, avatar: p.avatar || null, col: PCOL[i], pos: 0, score: 0, q: [], streak: 0 }; }

export function startGame(G, settings) {
  const s = settings || G.settings;
  return {
    ...G, v: 3, status: 'playing', settings: s,
    players: G.players.map((p, i) => mkPlayer(p, i)),
    tiles: buildBoard(s.cats, s.board), turn: 0, phase: 'roll', dice: null, rollId: 0, targets: [], msg: '',
    used: [], sheet: null, final: null, anim: null, endInfo: null, seq: (G.seq || 0) + 1, recorded: {},
  };
}
export function newLocalGame(settings, names) {
  const players = names.map((n, i) => ({ id: 'local-' + i, name: n }));
  return startGame({ host: 'local-0', players, seq: 0 }, settings);
}

// ---------- reducer ----------
export function reduce(G0, a) {
  if (!G0) return null;
  const G = structuredClone(G0);
  G.seq = (G.seq || 0) + 1;
  const P = G.players;
  const S = G.sheet;
  switch (a.t) {
    // --- sala ---
    case 'join': {
      if (G.status !== 'lobby') return null;
      if (P.some((p) => p.id === a.player.id)) {
        const p = P.find((x) => x.id === a.player.id);
        if (p.name === a.player.name && p.avatar === (a.player.avatar || null)) return null;
        p.name = a.player.name; p.avatar = a.player.avatar || null; return G;
      }
      if (P.length >= 6) return null;
      P.push(mkPlayer(a.player, P.length));
      return G;
    }
    case 'kick': {
      if (G.status !== 'lobby') return null;
      G.players = P.filter((p) => p.id !== a.id).map((p, i) => ({ ...p, col: PCOL[i] }));
      return G;
    }
    case 'settings': { if (G.status !== 'lobby') return null; G.settings = a.settings; return G; }
    case 'start': { if (G.status !== 'lobby') return null; return startGame(G); }
    case 'rematch': { if (G.status !== 'ended') return null; return startGame(G); }

    // --- tablero ---
    case 'roll': {
      if (G.status !== 'playing' || G.phase !== 'roll' || S) return null;
      const d = 1 + Math.floor(Math.random() * 6), p = P[G.turn], n = N(G);
      G.dice = d; G.rollId = G.seq; G.msg = '';
      G.targets = [...new Set([(p.pos + d) % n, (p.pos - d + n) % n])];
      G.phase = 'choose';
      return G;
    }
    case 'move': {
      if (G.phase !== 'choose' || !G.targets.includes(a.dest)) return null;
      const p = P[G.turn], n = N(G), cw = (p.pos + G.dice) % n === a.dest;
      G.anim = { pi: G.turn, from: p.pos, dir: cw ? 1 : -1, steps: G.dice, id: G.seq };
      p.pos = a.dest; G.targets = [];
      land(G, a.dest);
      return G;
    }
    case 'pick': {
      if (!S || S.k !== 'pick') return null;
      if (S.super) crownLanding(G, a.cat, 'Comodín de quesito: si aciertas, te llevas el quesito de esta categoría.');
      else openCat(G, a.cat, false, 'Comodín: has elegido categoría.');
      return G;
    }
    case 'rival': { if (!S || S.k !== 'rival') return null; startDuel(G, G.turn, a.o, S.cat); return G; }
    case 'spin': {
      if (!S || S.k !== 'cat' || S.mode) return null;
      const idx = Math.floor(Math.random() * S.modes.length);
      S.spin = { idx, id: G.seq, at: Date.now() }; S.mode = S.modes[idx];
      return G;
    }
    case 'start_q': {
      if (!S || S.k !== 'cat' || !S.mode) return null;
      if (S.mode === 'apuesta' && ![50, 100, 200].includes(a.bet)) return null;
      const q = pickQ(G, S.cat, levelFor(G));
      const base = { cat: S.cat, crown: S.crown, mode: S.mode, bet: a.bet || 0, step: 1 };
      if (S.mode === 'vuelo') { G.sheet = { ...base, k: 'vuelo', qid: q.id, ans: {}, res: null, id: G.seq }; return G; }
      G.sheet = mkQ(G, base, q);
      return G;
    }
    case 'answer': {
      if (!S || S.k !== 'q' || S.res) return null;
      const q = QBY[S.qid];
      let ok;
      if (S.mode === 'vf') ok = a.val === S.tf.truth;
      else if (S.mode === 'voz') { if (!S.revealed) return null; ok = !!a.val; }
      else { if (S.elim.includes(a.choice) || !S.opts.includes(a.choice)) return null; ok = a.choice === q.o[0]; }
      resolveQ(G, ok, a.choice || null, false);
      return G;
    }
    case 'reveal': { if (!S || S.k !== 'q' || S.mode !== 'voz' || S.revealed) return null; S.revealed = true; return G; }
    case 'timeout': {
      if (!S || S.k !== 'q' || S.res || S.deadline !== a.deadline) return null;
      if (S.mode === 'voz' && !S.revealed) { S.revealed = true; S.timedOut = true; return G; }
      resolveQ(G, false, null, true);
      return G;
    }
    case 'vans': {
      if (!S || S.k !== 'vuelo' || S.res || S.ans[a.by] !== undefined) return null;
      S.ans[a.by] = !!a.ok;
      if (P.every((_, i) => S.ans[i] !== undefined)) resolveVuelo(G);
      return G;
    }
    case 'continue': {
      if (!S || !S.res) return null;
      const next = S.res.next;
      if (next === 'continue') { G.sheet = null; G.phase = 'roll'; G.dice = null; G.msg = '¡Acierto! Vuelve a tirar.'; }
      else if (next === 'complete') complete(G, S.res.who ?? G.turn);
      else endTurn(G);
      return G;
    }

    // --- duelo ---
    case 'duel_go': { if (!S || S.k !== 'duel' || S.stage !== 'intro') return null; S.stage = 'play'; return G; }
    case 'dans': {
      if (!S || S.k !== 'duel' || S.stage !== 'play') return null;
      const arr = S.ans[a.by]; if (!arr || arr[a.k] !== undefined && arr[a.k] !== null) return null;
      if (a.k !== arr.length) return null;
      arr.push(!!a.ok);
      if (S.ans[S.a].length === S.qs.length && S.ans[S.b].length === S.qs.length) evalDuel(G);
      return G;
    }
    case 'duel_sd': {
      if (!S || S.k !== 'duel' || S.stage !== 'tie') return null;
      S.lvl = Math.min(4, S.lvl + 1);
      S.qs.push(pickQ(G, S.cat, S.lvl, S.qs).id);
      S.stage = 'play';
      return G;
    }

    // --- final ---
    case 'final': {
      if (G.status !== 'playing' || G.final) return null;
      startFinal(G, 'Habéis pulsado «Ronda final».');
      return G;
    }
    case 'fnext': {
      const F = G.final; if (!F) return null;
      if (F.stage === 'intro') { finalQ(G); return G; }
      if (F.stage === 'mid') { F.k++; finalQ(G); return G; }
      if (F.stage !== 'reveal') return null;
      if (F.k === 2 && !F.midShown && G.settings.cats.length > 3) { F.stage = 'mid'; F.midShown = true; return G; }
      if (F.k >= G.settings.cats.length - 1) { G.status = 'ended'; G.endInfo = { mode: 'final' }; G.sheet = null; return G; }
      F.k++; finalQ(G); return G;
    }
    case 'fbet': {
      const F = G.final; if (!F || F.stage !== 'play' || F.bets[a.by] !== undefined) return null;
      const max = Math.max(100, P[a.by].score);
      if (!(a.amt >= 0 && a.amt <= max)) return null;
      F.bets[a.by] = a.amt; return G;
    }
    case 'fans': {
      const F = G.final; if (!F || F.stage !== 'play' || F.bets[a.by] === undefined || F.ans[a.by] !== undefined) return null;
      F.ans[a.by] = !!a.ok;
      if (P.every((_, i) => F.ans[i] !== undefined)) {
        P.forEach((p, i) => { p.score = Math.max(0, p.score + (F.ans[i] ? F.bets[i] : -F.bets[i])); });
        F.stage = 'reveal';
      }
      return G;
    }
    default: return null;
  }
}

// ---------- ayudantes ----------
function land(G, i) {
  const t = G.tiles[i];
  G.phase = 'sheet';
  if (t.type === 'start' || t.type === 'roll') { G.phase = 'roll'; G.dice = null; G.msg = t.type === 'roll' ? '↻ Casilla «tira otra vez»' : 'Salida: tira otra vez'; return; }
  if (t.type === 'wild') { G.sheet = { k: 'pick', super: false, id: G.seq }; return; }
  if (t.type === 'super') { G.sheet = { k: 'pick', super: true, id: G.seq }; return; }
  if (t.type === 'crown') { crownLanding(G, t.cat); return; }
  openCat(G, t.cat, false);
}

function crownLanding(G, cat, note) {
  const p = G.players[G.turn];
  if (p.q.includes(cat)) { openCat(G, cat, false, 'Ya tienes este quesito: es una pregunta normal.'); return; }
  const owners = G.players.map((_, k) => k).filter((k) => k !== G.turn && G.players[k].q.includes(cat));
  if (owners.length === 1) { startDuel(G, G.turn, owners[0], cat); return; }
  if (owners.length > 1) { G.sheet = { k: 'rival', cat, owners, id: G.seq }; G.phase = 'sheet'; return; }
  openCat(G, cat, true, note);
}

function openCat(G, cat, crown, note) {
  const modes = activeModes(G);
  G.sheet = { k: 'cat', cat, crown, note: note || null, modes, spin: null, mode: modes.length === 1 ? modes[0] : null, id: G.seq };
  G.phase = 'sheet';
}

function mkQ(G, base, q) {
  let opts = shuffle(q.o);
  if (base.mode === 'fifty') opts = shuffle([q.o[0], rnd(q.o.slice(1))]);
  let tf = null;
  if (base.mode === 'vf') { const truth = Math.random() < 0.5; tf = { truth, opt: truth ? q.o[0] : rnd(q.o.slice(1)) }; }
  const secs = MODE[base.mode].t;
  return { ...base, k: 'q', qid: q.id, opts, tf, answerer: G.turn, elim: [], tried: [], deadline: Date.now() + secs * 1000, secs, res: null, revealed: false, choice: null, miss: null, id: G.seq };
}

function scoreHit(G, pi, g) {
  const p = G.players[pi];
  p.streak++;
  const bonus = p.streak >= 2 ? Math.min(100, 25 * (p.streak - 1)) : 0;
  p.score += g + bonus;
  return [{ t: 'big', s: `+${g + bonus}` }].concat(bonus ? [{ t: 'sub', s: `${g} + ${bonus} de racha` }] : []);
}

function crownGain(G, pi, S, lines) {
  const p = G.players[pi];
  if (S.crown && !p.q.includes(S.cat)) {
    p.q.push(S.cat); p.score += 300;
    lines.push({ t: 'crown', s: `¡Quesito de ${CATS[S.cat].n}! +300` });
    if (p.q.length === G.settings.cats.length) return 'complete';
  }
  return 'continue';
}

function resolveQ(G, ok, choice, timeout) {
  const S = G.sheet, q = QBY[S.qid], P = G.players, n = P.length;
  S.choice = choice;
  // Rebote en cadena
  if (S.mode === 'rebote' && n > 1) {
    if (ok) {
      if (S.answerer === G.turn) {
        const lines = scoreHit(G, G.turn, pts(q, 'rebote'));
        const next = crownGain(G, G.turn, S, lines);
        S.res = { ok: true, by: G.turn, lines, next, showAnswer: true };
      } else {
        const g = pts(q, 'clasica');
        P[S.answerer].score += g;
        S.res = { ok: true, by: S.answerer, lines: [{ t: 'big', s: `+${g}` }, { t: 'txt', s: `${P[S.answerer].name} se lleva el rebote.` }], next: 'turn', showAnswer: true };
      }
      return;
    }
    if (choice && !S.elim.includes(choice)) S.elim.push(choice);
    S.tried.push(S.answerer);
    S.miss = { by: S.answerer, choice, timeout };
    const remaining = S.opts.filter((o) => !S.elim.includes(o)).length;
    if (remaining <= 1 || S.tried.length >= n * 2) {
      S.res = { ok: false, by: S.answerer, timeout, lines: [{ t: 'txt', s: 'Nadie la ha acertado.' }], next: 'turn', showAnswer: true };
      return;
    }
    S.answerer = (S.answerer + 1) % n;
    S.secs = 10; S.deadline = Date.now() + 10000;
    return;
  }
  // Doble o nada: primera acertada → segunda pregunta
  if (S.mode === 'doble' && ok && S.step === 1) {
    const q2 = pickQ(G, S.cat, levelFor(G), [S.qid]);
    G.sheet = { ...mkQ(G, { cat: S.cat, crown: S.crown, mode: 'doble', bet: 0, step: 2 }, q2), prevQ: S.qid };
    return;
  }
  const act = P[G.turn];
  if (ok) {
    let g;
    if (S.mode === 'apuesta') g = S.bet;
    else if (S.mode === 'doble') g = pts(q, 'doble') + pts(QBY[S.prevQ], 'doble');
    else g = pts(q, S.mode);
    const lines = scoreHit(G, G.turn, g);
    const next = crownGain(G, G.turn, S, lines);
    S.res = { ok: true, by: G.turn, lines, next, showAnswer: true };
  } else {
    const lines = [];
    if (S.mode === 'apuesta') { act.score = Math.max(0, act.score - S.bet); lines.push({ t: 'big', s: `−${S.bet}` }); }
    if (S.mode === 'doble' && S.step === 2) lines.push({ t: 'txt', s: 'Fallaste la segunda: no sumas nada.' });
    if (S.mode === 'retro') {
      const nn = N(G);
      G.anim = { pi: G.turn, from: act.pos, dir: -1, steps: 3, id: G.seq };
      act.pos = (act.pos - 3 + nn) % nn;
      lines.push({ t: 'txt', s: 'Retrocedes 3 casillas.' });
    }
    S.res = { ok: false, by: G.turn, timeout, lines, next: 'turn', showAnswer: true };
  }
}

function resolveVuelo(G) {
  const S = G.sheet, q = QBY[S.qid], P = G.players;
  const lines = [];
  P.forEach((p, i) => { if (i !== G.turn && S.ans[i]) { p.score += 50; } });
  const others = P.filter((_, i) => i !== G.turn && S.ans[i]).map((p) => p.name);
  if (S.ans[G.turn]) {
    lines.push(...scoreHit(G, G.turn, pts(q, 'vuelo')));
    const next = crownGain(G, G.turn, S, lines);
    if (others.length) lines.push({ t: 'txt', s: `También aciertan: ${others.join(', ')} (+50).` });
    S.res = { ok: true, by: G.turn, lines, next, showAnswer: true };
  } else {
    if (others.length) lines.push({ t: 'txt', s: `Aciertan: ${others.join(', ')} (+50 cada uno).` });
    S.res = { ok: false, by: G.turn, lines, next: 'turn', showAnswer: true };
  }
}

function endTurn(G) {
  G.players[G.turn].streak = 0;
  G.turn = (G.turn + 1) % G.players.length;
  G.phase = 'roll'; G.dice = null; G.sheet = null; G.msg = ''; G.targets = [];
}

function complete(G, pi) {
  const p = G.players[pi];
  p.score += 500;
  if (G.settings.endMode === 'direct') { G.status = 'ended'; G.endInfo = { mode: 'direct', winner: pi }; G.sheet = null; return; }
  startFinal(G, `${p.name} ha completado los 6 quesitos (+500).`);
}

function startDuel(G, a, b, cat) {
  const L = G.settings.diff === 'mix' ? 2 : G.settings.diff;
  const qs = [];
  for (let k = 0; k < 4; k++) qs.push(pickQ(G, cat, L, qs).id);
  G.sheet = { k: 'duel', cat, a, b, L, lvl: L, qs, ans: { [a]: [], [b]: [] }, stage: 'intro', res: null, id: G.seq };
  G.phase = 'sheet';
}

function evalDuel(G) {
  const S = G.sheet, P = G.players;
  const sa = S.ans[S.a].filter(Boolean).length, sb = S.ans[S.b].filter(Boolean).length;
  if (sa === sb) { S.stage = 'tie'; return; }
  S.stage = 'done';
  const pa = P[S.a], pb = P[S.b];
  if (sa > sb) {
    pb.q = pb.q.filter((x) => x !== S.cat); pb.score = Math.max(0, pb.score - 300);
    pa.q.push(S.cat); pa.score += 300; pa.streak++;
    const next = pa.q.length === G.settings.cats.length ? 'complete' : 'continue';
    S.res = { win: S.a, next, who: S.a, lines: [{ t: 'txt', s: `${pa.name} le quita el quesito de ${CATS[S.cat].n} a ${pb.name}: +300 / −300.` }] };
  } else {
    pb.score += 150;
    S.res = { win: S.b, next: 'turn', lines: [{ t: 'txt', s: `${pb.name} defiende su quesito: +150.` }] };
  }
}

function startFinal(G, reason) {
  G.final = { k: 0, stage: 'intro', reason, qid: null, bets: {}, ans: {}, midShown: false, id: G.seq };
  G.sheet = { k: 'final', id: G.seq };
  G.phase = 'sheet';
}
function finalQ(G) {
  const F = G.final, cat = G.settings.cats[F.k];
  const lvl = G.settings.diff === 'mix' ? [2, 2, 3, 3, 4, 4][F.k] : G.settings.diff;
  F.cat = cat; F.qid = pickQ(G, cat, lvl).id; F.bets = {}; F.ans = {}; F.stage = 'play'; F.qseq = G.seq;
}
