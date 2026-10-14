import React from 'react';

export default function Legal({ kind }) {
  const priv = kind !== 'terminos';
  return (
    <div className="app legal">
      <div className="brand"><h1 className="logo">Tripla<b>zo</b></h1><a className="mini" href="./">Volver al juego</a></div>
      {priv ? (
        <>
          <h2 className="h2">Política de privacidad</h2>
          <p>Triplazo es un juego de preguntas entre amigos. Esta página explica qué datos usamos y para qué.</p>
          <h3>Qué datos guardamos</h3>
          <ul>
            <li>Si entras con Google: tu nombre, tu correo, tu foto de perfil y un identificador de cuenta, para mostrar tu nombre en las partidas y llevar tu número de partidas y victorias.</li>
            <li>Si juegas como invitado: solo el nombre que escribas y un identificador aleatorio guardado en tu navegador.</li>
            <li>El estado de las partidas online (jugadores, puntuaciones y respuestas) mientras dura la sala.</li>
          </ul>
          <h3>Para qué los usamos</h3>
          <p>Solo para que funcione el juego. No vendemos ni cedemos datos a terceros ni los usamos para publicidad.</p>
          <h3>Dónde se guardan</h3>
          <p>En Supabase (región de la UE) y en el navegador de cada jugador. La web se sirve desde Vercel.</p>
          <h3>Tus derechos</h3>
          <p>Puedes pedir que borremos tu cuenta y tus datos escribiendo a noreana2026@gmail.com.</p>
        </>
      ) : (
        <>
          <h2 className="h2">Condiciones de uso</h2>
          <p>Triplazo es un juego gratuito para uso personal entre amigos, en fase de pruebas. No hay apuestas con dinero real: las «apuestas» son puntos del juego.</p>
          <p>Las preguntas se han revisado con fuentes públicas, pero pueden contener errores. Si encuentras uno, escríbenos a noreana2026@gmail.com.</p>
          <p>Podemos cambiar o retirar el juego en cualquier momento.</p>
        </>
      )}
    </div>
  );
}
