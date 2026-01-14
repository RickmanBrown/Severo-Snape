import React from 'react';

function Penseira({ aoVoltar }) { 
  return (
    <div className="mensagem-secreta">
      <h2>Penseira</h2>
      <button className="back-button" onClick={aoVoltar}>Voltar</button>
    </div>
  );
}

export default Penseira;