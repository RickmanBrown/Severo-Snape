import React, { useState } from 'react';
import './Livro.css';

const Livro = ({ aoSair }) => {

  return (
    <div className="livro-aberto-container mensagem-secreta">
      <div className="folha-livro">
         <header>
            <div className="book-badge">Propriedade Do Príncipe Mestiço</div>
            <h2>O livro de Poções</h2>
         </header>

         <article className="conteudo-paginas">
            <p>
                Este livro pertence ao Príncipe Mestiço. Contém várias anotações e melhorias para as receitas de poções tradicionais. Use-o com sabedoria.
            </p>
         </article>
      </div>

        <button className="back-button" onClick={aoSair}> Fechar e Sair</button>
      </div>
  );
}