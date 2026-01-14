import React from 'react';

function Estoque({ aoVoltar }) { // mude "NomeDaPagina" para Sobre, Pocoes, etc.
  return (
    <div className="mensagem-secreta">
      <h2>Estoque</h2>
      <button className="back-button" onClick={aoVoltar}>Voltar</button>
    </div>
  );
}

export default Estoque;