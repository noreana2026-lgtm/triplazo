import { BOARDS } from './constants.js';

export const boardSize = (b) => 2 * BOARDS[b].w + 2 * BOARDS[b].h - 4;

// Pista perimetral: fila de arriba (izq→der), columna derecha (arriba→abajo),
// fila de abajo (der→izq) y columna izquierda (abajo→arriba).
export function cellOf(i, b) {
  const { w, h } = BOARDS[b];
  if (i < w) return [0, i];
  i -= w;
  if (i < h - 1) return [i + 1, w - 1];
  i -= h - 1;
  if (i < w - 1) return [h - 1, w - 2 - i];
  i -= w - 1;
  return [h - 2 - i, 0];
}

const cdist = (a, b, n) => Math.min((a - b + n) % n, (b - a + n) % n);

export function buildBoard(cats, b) {
  const B = BOARDS[b];
  const N = boardSize(b);
  const T = Array(N).fill(null);
  T[0] = { type: 'start' };

  // 6 coronas repartidas por igual
  const crowns = [];
  for (let k = 0; k < 6; k++) {
    let i = Math.round(N / 12 + (k * N) / 6) % N;
    if (i === 0) i = 1;
    crowns.push(i);
    T[i] = { type: 'crown', cat: cats[k] };
  }

  // «Tira otra vez» a 2 casillas de varias coronas (alternando el lado)
  const order = [0, 3, 1, 4, 2, 5];
  for (let k = 0; k < B.rolls; k++) {
    const c = crowns[order[k]];
    const sides = k % 2 ? [2, -2] : [-2, 2];
    for (const s of sides) {
      const i = (c + s + N) % N;
      if (!T[i]) { T[i] = { type: 'roll' }; break; }
    }
  }

  // Comodines normales (eliges categoría)
  for (let k = 0; k < B.wild; k++) {
    const target = Math.round(N / 4 + (k * N) / 2) % N;
    let best = null;
    for (let d = 0; d < N && best === null; d++) {
      for (const i of [(target + d) % N, (target - d + N) % N]) if (!T[i]) { best = i; break; }
    }
    if (best !== null) T[best] = { type: 'wild' };
  }

  // Comodín de quesito: al azar, en la casilla libre más alejada de las coronas
  const free = T.map((t, i) => (t ? -1 : i)).filter((i) => i >= 0);
  const far = (i) => Math.min(...crowns.map((c) => cdist(i, c, N)));
  const maxD = Math.max(...free.map(far));
  const cands = free.filter((i) => far(i) === maxD);
  T[cands[Math.floor(Math.random() * cands.length)]] = { type: 'super' };

  // Resto: categorías equilibradas, sin repetir vecinas
  const count = Object.fromEntries(cats.map((c) => [c, 0]));
  let rot = Math.floor(Math.random() * 6);
  for (let i = 0; i < N; i++) {
    if (T[i]) continue;
    const nb = [T[(i + N - 1) % N], T[(i + 1) % N], T[(i + N - 2) % N], T[(i + 2) % N]]
      .filter((t) => t && t.cat).map((t) => t.cat);
    const ord = cats.map((_, k) => cats[(k + rot) % cats.length]);
    const pool = ord.filter((c) => !nb.includes(c));
    const best = (pool.length ? pool : ord).slice().sort((a, b2) => count[a] - count[b2])[0];
    T[i] = { type: 'cat', cat: best };
    count[best]++;
    rot += 2;
  }
  return T;
}
