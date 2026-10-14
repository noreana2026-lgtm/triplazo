# Triplazo

Trivial de tablero para jugar entre amigos, en un solo móvil o cada uno en el suyo (salas online con código).

- Vite + React, desplegado en Vercel.
- Supabase: tabla `triplazo_rooms` (estado de la partida con control de versión y Realtime), `triplazo_profiles` (cuentas de Google) y funciones `triplazo_*`.
- Banco de 241 preguntas verificadas en `src/data/questions.js` (la primera opción es siempre la correcta).
- Motor del juego en `src/game/engine.js` (reducer compartido por los modos local y online).
