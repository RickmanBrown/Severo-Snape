import React, { useState } from 'react';
import "./App.css";
import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';
import Pocoes from './pages/Pocoes.jsx';
import Estoque from './pages/Estoque.jsx';
import Feiticos from './pages/Feiticos.jsx'; 
import Penseira from './pages/Penseira.jsx';

function App() {
  const [animando, setAnimando] = useState(false);
  const [paginaAtiva, setPaginaAtiva] = useState('Home');

  
  const navegarPara = (novaPagina) => {
    setAnimando(true);
    setTimeout(() => {
      setPaginaAtiva(novaPagina);
      setAnimando(false);
    }, 1500);
  };

  const renderizarPagina = () => {
    switch (paginaAtiva) {
      case 'Home':
        return <Home aoDesvendar={() => navegarPara('Sumario')} />;
      
      case 'Sumario':
        return (
          <div className="mensagem-secreta">
            <h2>Estudos de Poções Avançadas</h2>
            <div className="divider"></div>
            <p className="instrucoes">"Este livro é propriedade do Príncipe Mestiço."</p>

            <nav className="capitulos-lista">
              <div className="capitulo-item">
                <span>Capítulo I</span>
                <button onClick={() => navegarPara('Sobre')}>O Príncipe Mestiço: Quem sou eu?</button>
              </div>
              <div className="capitulo-item">
                <span>Capítulo II</span>
                <button onClick={() => navegarPara('Pocoes')}>Poções Avançadas: Receitas Editadas</button>
              </div>
              <div className="capitulo-item">
                <span>Capítulo III</span>
                <button onClick={() => navegarPara('Estoque')}>Estoque Privado de Ingredientes</button>
              </div>
              <div className="capitulo-item">
                <span>Capítulo IV</span>
                <button onClick={() => navegarPara('Feiticos')}>Sectumsempra e Feitiços Autorais</button>
              </div>
              <div className="capitulo-item">
                <span>Capítulo V</span>
                <button onClick={() => navegarPara('Penseira')}>A Penseira: Memórias do Diretor</button>
              </div>
            </nav>

            <button className="back-button" onClick={() => navegarPara('Home')}>
              Fechar Livro
            </button>
          </div>
        );

      case 'Sobre': return <Sobre aoVoltar={() => navegarPara('Sumario')} />;
      case 'Pocoes': return <Pocoes aoVoltar={() => navegarPara('Sumario')} />;
      case 'Estoque': return <Estoque aoVoltar={() => navegarPara('Sumario')} />;
      case 'Feiticos': return <Feiticos aoVoltar={() => navegarPara('Sumario')} />;
      case 'Penseira': return <Penseira aoVoltar={() => navegarPara('Sumario')} />;
      default: return <Home aoDesvendar={() => navegarPara('Sumario')} />;
    }
  };

  return (
    <main className="container">

      <div className={`ink-splash-overlay ${animando ? 'active' : ''}`}></div>

      <div className="magic-particles"></div>

      <div className="content">
        <div className="image-container">
          <img src="./img/fotosnape-1.png" alt="Severus Snape" />
          <div className="image-overlay"></div>
        </div>

        <div className="text">
          {renderizarPagina()}
        </div>
      </div>
    </main>
  );
}

export default App;