import React, { useState } from 'react';
import "./App.css";

function App() {
  const [animando, setAnimando] = useState(false);
  const [conteudoRevelado, setConteudoRevelado] = useState(false);

  const desvendarSegredos = () => {
    setAnimando(true);

    // Espera a tinta cobrir a tela (1.5s) para mudar o conteúdo
    setTimeout(() => {
      setConteudoRevelado(true);
      setAnimando(false);
    }, 1500);
  };

  return (
    <main className="container">
      {/* A mancha de tinta que vai crescer */}
      <div className={`ink-splash-overlay ${animando ? 'active' : ''}`}></div>

      <div className="magic-particles"></div>

      <div className="content">
        <div className="image-container">
          <img src="./img/fotosnape-1.png" alt="Severus Snape" />
          <div className="image-overlay"></div>
        </div>

        <div className="text">
          {!conteudoRevelado ? (
            <>
              <div className="book-badge">Propriedade do Príncipe Mestiço</div>
              <h1>O Diário do <br /> <span>Príncipe Mestiço</span></h1>
              <div className="divider"></div>
              <p className="subtitle">Segredos, poções e memórias ocultas.</p>
              <button className="enter-button" onClick={desvendarSegredos}>
                Desvendar Segredos
              </button>
            </>
          ) : (
            
            <div className="mensagem-secreta">
              <h2>Estudos de Poções Avançadas</h2>
              <div className="divider"></div>
              <p className="instrucoes">"Este livro é propriedade do Príncipe Mestiço."</p>

              <nav className="capitulos-lista">
                <div className="capitulo-item">
                  <span>Capítulo I</span>
                  <button>O Príncipe Mestiço: Quem sou eu?</button>
                </div>
                <div className="capitulo-item">
                  <span>Capítulo II</span>
                  <button>Poções Avançadas: Receitas Editadas</button>
                </div>
                <div className="capitulo-item">
                  <span>Capítulo III</span>
                  <button>Estoque Privado de Ingredientes</button>
                </div>
                <div className="capitulo-item">
                  <span>Capítulo IV</span>
                  <button>Sectumsempra e Feitiços Autorais</button>
                </div>
                <div className="capitulo-item">
                  <span>Capítulo V</span>
                  <button>O Pensene: Memórias do Diretor</button>
                </div>
              </nav>

              <button className="back-button" onClick={() => setConteudoRevelado(false)}>
                Fechar Livro
              </button>

            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;