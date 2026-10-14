import React from 'react';
import { MODES } from '../game/constants.js';

export default function Rules() {
  return (
    <div className="rules">
      <ul>
        <li>Tira el dado y elige casilla: puedes ir hacia delante o hacia atrás.</li>
        <li>En la categoría donde caes gira la ruleta de modo y responde. <b>Si aciertas, sigues tirando.</b></li>
        <li>Las coronas dan el quesito de su categoría si aciertas. Las casillas ↻ (a 2 de varias coronas) te dejan volver a tirar.</li>
        <li>★ Comodín: eliges categoría. Comodín de quesito (uno, colocado al azar lejos de las coronas): eliges categoría y te juegas su quesito.</li>
        <li>Si caes en una corona que ya tiene otro, hay <b>duelo</b>: 4 preguntas iguales para los dos. Si ganas, le quitas el quesito. Si empatáis, muerte súbita subiendo la dificultad hasta Extremo.</li>
        <li>Con los 6 quesitos (o pulsando «Ronda final») se juega la ronda final: una pregunta de cada categoría para todos, apostando en secreto. Los marcadores se ocultan y solo se ven tras la 3.ª pregunta y al final.</li>
      </ul>
      <div className="label" style={{ marginTop: 12 }}>Puntuación</div>
      <dl className="rtab">
        <dt>Acierto (base)</dt><dd>100</dd>
        <dt>Nivel</dt><dd>Fácil ×0,8 · Media ×1 · Difícil ×1,2 · Extremo ×1,5</dd>
        <dt>Racha (desde el 2.º acierto seguido)</dt><dd>+25 c/u, máx. +100</dd>
        <dt>Quesito</dt><dd>+300</dd>
        <dt>Duelo: gana el retador</dt><dd>+300 / rival −300</dd>
        <dt>Duelo: gana el defensor</dt><dd>+150</dd>
        <dt>Robar un rebote</dt><dd>valor de una clásica</dd>
        <dt>Completar los 6 quesitos</dt><dd>+500</dd>
        <dt>Fallo</dt><dd>0 (salvo Apuesta)</dd>
      </dl>
      <div className="label" style={{ marginTop: 12 }}>Modos de la ruleta</div>
      <dl className="rtab">
        {MODES.map((m) => <React.Fragment key={m.id}><dt>{m.n}</dt><dd className="mdesc">{m.d}</dd></React.Fragment>)}
      </dl>
    </div>
  );
}
