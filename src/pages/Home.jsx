import React from 'react';

function Home({ aoDesvendar }) {
  return (
    <>
      <div className="book-badge">Propriedade do Príncipe Mestiço</div>
      <h1>O Diário do <br /> <span>Príncipe Mestiço</span></h1>
      <div className="divider"></div>
      <p className="subtitle">Segredos, poções e memórias ocultas.</p>
      <button className="enter-button" onClick={aoDesvendar}>
        Desvendar Segredos
      </button>
    </>
  );
}

export default Home;