import React from 'react';

function Sobre({ aoVoltar }) {
  return (
    <div className="mensagem-secreta sobre-container">
      <header>
        <div className="book-badge">Capítulo I</div>
        <h2>Sobre o Príncipe Mestiço</h2>
        <div className="divider"></div>
      </header>

      <article className="texto-longo">
        <p className="citacao">
          "Para compreender quem fui, é preciso entender que a magia, para mim, nunca foi uma questão de agitar varinhas ou recitar encantamentos pueris. Foi uma questão de domínio absoluto — sobre a matéria, através das Poções, e sobre a própria essência, através da mente."
        </p>

        <section className="fade-item" style={{ animationDelay: '0.2s' }}>
          <h3>A Alquimia do Príncipe: Redefinindo a Perfeição</h3>
          <p>
            Enquanto meus contemporâneos seguiam cegamente as instruções de livros didáticos medíocres, eu via as falhas na lógica de produção. No meu exemplar de Estudos Avançados no Preparo de Poções, não apenas corrigi receitas; eu as revolucionei.
          </p>
          <ul className="lista-conquistas">
            <li>
              <strong>Ciência da Eficiência:</strong> Descobri que esmagar um Grão de Sopofó com a lâmina de uma adaga de prata liberava o suco de forma muito mais eficaz do que cortá-lo.
            </li>
            <li>
              <strong>Inovação Letal:</strong> Minha mente não se limitava à cura. Criei o Sectumsempra — um feitiço para inimigos — que corta a carne como uma espada invisível, e o seu contra-feitiço, Vulnera Sanentur, uma prece rítmica capaz de costurar tecidos e devolver o sangue ao corpo.
            </li>
            <li>
              <strong>A Maestria sobre o Caos:</strong> Poções são a ciência de controlar o imprevisível. Minha habilidade me permitiu sintetizar o Acônito para Lupin, mantendo sua mente humana intacta durante a transformação. Poucos bruxos vivos possuem a precisão necessária para tal feito.
            </li>
          </ul>
        </section>

        <section className="fade-item" style={{ animationDelay: '0.4s' }}>
          <h3>Oclumência: O Trunfo da Vontade</h3>
          <p>
            Muitos acreditam que a Oclumência é apenas o ato de fechar a mente. Estão errados. Para mim, ela foi a arte de construir uma realidade falsa tão impecável que se tornava indistinguível da verdade.
          </p>
          <p>
            Voldemort orgulhava-se de ser o maior Legilimens de todos os tempos. Ele acreditava que ninguém poderia esconder nada dele. Eu provei o contrário todas as noites, durante anos.
          </p>
          <p>
            <strong>A Compartimentação do Eu:</strong> Eu não apenas escondia memórias; eu as enterrava sob camadas de amargura genuína. Quando o Lorde das Trevas olhava em meus olhos, ele via o que esperava ver: desdém pelos nascidos-trouxas, ódio pelos Marotos e lealdade à sua causa.
          </p>
          <p>
            <strong>O Sacrifício do Sentimento:</strong> Para manter minha fachada, tive que isolar a lembrança de Lílian em um santuário inviolável, tão profundo que nem mesmo a dor da sua perda poderia vazar para a superfície.
          </p>
        </section>

        <section>
          <h3>O Legado Invisível</h3>
          <p>
            Eu fui o mestre que controlou as variáveis da guerra sem nunca reivindicar o tabuleiro. Enquanto Potter era o rosto da resistência, eu era o seu mecanismo interno. Sem minhas correções em poções, ele não teria sobrevivido; sem minha oclumência, a Ordem teria caído décadas atrás.
          </p>
          <p>
            Fui o Príncipe Mestiço, o Oclumente supremo e o guardião da última esperança de Hogwarts. E fiz tudo isso sem buscar um único agradecimento.
          </p>
        </section>
      </article>

      {/* Botão para retornar ao sumário de capítulos */}
      <button className="back-button" onClick={aoVoltar}>
        Voltar ao Sumário
      </button>
    </div>
  );
}

export default Sobre;