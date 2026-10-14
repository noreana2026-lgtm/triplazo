export const CATS = {
  nba: { n: 'NBA', ab: 'NBA', col: '#ff6b3d' },
  basket: { n: 'Baloncesto FEB y Europa', ab: 'BASKET', col: '#f6b532' },
  otros: { n: 'Otros deportes', ab: 'OTROS', col: '#2ec4b6' },
  futbol: { n: 'Fútbol', ab: 'FÚTBOL', col: '#7cc94a' },
  esp: { n: 'Deporte español', ab: 'ESPAÑA', col: '#efe6d2' },
  sneakers: { n: 'Sneakers y moda', ab: 'SNEAK', col: '#c99a6b' },
  influ: { n: 'Influencers', ab: 'INFLU', col: '#ff7eb6' },
  geo: { n: 'Geografía', ab: 'GEO', col: '#5aa9f0' },
  cine: { n: 'Música y cine', ab: 'CINE', col: '#b28dff' },
  gaming: { n: 'Videojuegos y eSports', ab: 'GAMING', col: '#3ee0e8' },
  memes: { n: 'Memes e internet', ab: 'MEMES', col: '#ffe066' },
};

export const PACKS = {
  deportes: { n: 'Deportes', d: 'Solo para fans', c: ['nba', 'basket', 'futbol', 'otros', 'esp', 'sneakers'] },
  general: { n: 'General', d: 'Un poco de todo', c: ['futbol', 'geo', 'cine', 'influ', 'memes', 'gaming'] },
  pop: { n: 'Pop e internet', d: 'Redes, gaming y cultura', c: ['influ', 'memes', 'gaming', 'cine', 'sneakers', 'futbol'] },
  custom: { n: 'A tu gusto', d: 'Eliges 6 categorías', c: null },
};

// m = multiplicador sobre la base (100 × nivel). multi = necesita 2+ jugadores.
export const MODES = [
  { id: 'clasica', n: 'Clásica', s: 'Clásica', d: '4 opciones y 20 segundos.', col: '#f4efe4', t: 20, m: 1 },
  { id: 'crono', n: 'Contrarreloj', s: 'Contrarreloj', d: 'Solo 8 segundos. Vale ×1,5.', col: '#ff7a29', t: 8, m: 1.5 },
  { id: 'vf', n: 'Verdadero o falso', s: 'V o F', d: 'Te proponemos una respuesta: ¿es la buena? 12 segundos. Vale ×0,6.', col: '#5aa9f0', t: 12, m: 0.6 },
  { id: 'apuesta', n: 'Apuesta', s: 'Apuesta', d: 'Apuesta 50, 100 o 200 antes de ver la pregunta. Si aciertas los ganas; si fallas, los pierdes.', col: '#ffc845', t: 20, m: 1 },
  { id: 'voz', n: 'A viva voz', s: 'Viva voz', d: 'Sin opciones: di la respuesta en voz alta y el grupo decide si vale. 20 segundos. Vale ×1,5.', col: '#3ddc97', t: 20, m: 1.5 },
  { id: 'rebote', n: 'Rebote', s: 'Rebote', d: 'Si fallas, el siguiente intenta robarla, y luego el siguiente, hasta que alguien acierte o se acaben las opciones. La correcta no se enseña hasta el final.', col: '#ff7eb6', t: 15, m: 1, multi: true },
  { id: 'fifty', n: '50:50', s: '50:50', d: 'Quitamos dos opciones falsas. 15 segundos. Vale ×0,7.', col: '#c3f0ff', t: 15, m: 0.7 },
  { id: 'doble', n: 'Doble o nada', s: 'Doble', d: 'Dos preguntas seguidas de la categoría. Si aciertas las dos, cada una vale ×1,5; si fallas una, nada.', col: '#ff5a5f', t: 15, m: 1.5 },
  { id: 'vuelo', n: 'Al vuelo', s: 'Al vuelo', d: 'Responde todo el mundo a la vez. Tú necesitas acertar para puntuar y seguir; cada rival que acierte gana 50.', col: '#a0e85b', t: 20, m: 1, multi: true },
  { id: 'retro', n: 'Retroceso', s: 'Retroceso', d: 'Vale ×1,5, pero si fallas retrocedes 3 casillas.', col: '#b28dff', t: 15, m: 1.5 },
];
export const MODE = Object.fromEntries(MODES.map((m) => [m.id, m]));
export const NEW_MODES = ['fifty', 'doble', 'vuelo', 'retro'];

export const BOARDS = {
  rapido: { n: 'Rápido', d: '24 casillas', w: 6, h: 8, rolls: 3, wild: 1 },
  estandar: { n: 'Estándar', d: '28 casillas', w: 7, h: 9, rolls: 4, wild: 2 },
  grande: { n: 'Grande', d: '36 casillas', w: 9, h: 11, rolls: 6, wild: 2 },
};

export const LVL = { 1: 'Fácil', 2: 'Media', 3: 'Difícil', 4: 'Extremo' };
export const LMULT = { 1: 0.8, 2: 1, 3: 1.2, 4: 1.5 };
export const PCOL = ['#ff4d6d', '#4dabf7', '#ffd43b', '#69db7c', '#da77f2', '#ff922b'];
