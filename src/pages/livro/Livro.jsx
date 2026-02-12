import React, { useState } from 'react';

const dadosLivro = [
  { id: 0, tipo: 'capa', titulo: "Índice" },
  { 
    id: 1, 
    titulo: "Poção do Morto-Vivo", 
    texto: "Corte a vagem de Sopoforous com uma faca de prata para extrair o suco. A mistura deve apresentar uma coloração lilás clara e consistência viscosa.", 
    anotacao: "NÃO CORTE! Esmague com a lateral da lâmina de prata, libera muito mais suco. Mexa 7 vezes no sentido horário e 1 vez no anti-horário." 
  },
  { 
    id: 2, 
    titulo: "Felix Felicis", 
    texto: "A poção deve ser cozida por seis meses em fogo brando. A cor final deve ser de ouro derretido e gotas saltando da superfície como peixes dourados.", 
    anotacao: "Uma colher de mel de fada no final estabiliza a mistura. Cuidado: o uso excessivo causa tontura e imprudência perigosa." 
  },
  { 
    id: 3, 
    titulo: "Sectumsempra", 
    texto: "(Conteúdo não encontrado nos registros oficiais de Libatius Borage. Página parece ter sido adicionada posteriormente.)", 
    anotacao: "SECTUMSEMPRA. Para inimigos. Um feitiço de corte profundo que nunca para de sangrar a menos que o contrafeitiço seja aplicado rapidamente." 
  }
];

const Livro = ({ aoVoltar }) => {
  const [pagina, setPagina] = useState(0);
  const atual = dadosLivro[pagina];

  const estilos = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#f4e4bc',
      backgroundImage: 'radial-gradient(circle, transparent, rgba(139,69,19,0.25)), url("https://www.transparenttextures.com/patterns/paper-fibers.png")',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      color: '#2b1d0e',
      fontFamily: '"Georgia", serif',
      boxShadow: 'inset 0 0 150px rgba(0,0,0,0.4)',
      boxSizing: 'border-box'
    },
    pergaminho: {
      maxWidth: '850px',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      overflowY: 'auto',
      padding: '20px'
    },
    tituloPrincipal: {
      fontSize: '3.5rem',
      borderBottom: '2px solid #2b1d0e',
      margin: '0 0 10px 0',
      textTransform: 'uppercase',
      letterSpacing: '3px'
    },
    snape: {
      fontFamily: '"Comic Sans MS", "cursive", sans-serif', // Simula escrita à mão
      color: '#1a237e',
      fontSize: '1.6rem',
      marginTop: '25px',
      display: 'block',
      fontStyle: 'italic',
      lineHeight: '1.4'
    },
    lista: {
      listStyle: 'none',
      padding: 0,
      marginTop: '40px',
      fontSize: '1.4rem',
      textAlign: 'left'
    },
    item: {
      padding: '15px 10px',
      borderBottom: '1px dashed rgba(43,29,14,0.3)',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      transition: 'background 0.2s'
    },
    botoesFooter: {
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: '20px 0',
      borderTop: '1px solid rgba(43,29,14,0.2)'
    },
    btn: {
      background: 'rgba(43,29,14,0.05)',
      border: '1px solid #2b1d0e',
      padding: '8px 25px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontFamily: 'inherit',
      transition: 'all 0.2s'
    }
  };

  return (
    <div style={estilos.overlay}>
      <button 
        style={{ position: 'absolute', top: 20, right: 30, background: 'none', border: 'none', fontSize: '2.5rem', cursor: 'pointer', opacity: 0.6 }} 
        onClick={aoVoltar}
        title="Fechar Livro"
      >
        ×
      </button>

      <div style={estilos.pergaminho} className="custom-scrollbar">
        <header>
          <h1 style={estilos.tituloPrincipal}>Estudos Avançados</h1>
          <p style={{ fontSize: '1.1rem', letterSpacing: '2px', marginBottom: '15px' }}>LIBATIUS BORAGE</p>
          
          {pagina === 0 && (
            <div style={estilos.snape}>
              <span style={{ textDecoration: 'line-through', opacity: 0.5, marginRight: '12px' }}>
                Este livro pertence a: Harry
              </span> 
              <span style={{ borderBottom: '1px solid #1a237e' }}>Príncipe Mestiço</span>
            </div>
          )}
        </header>

        <main style={{ marginTop: '30px', flex: 1 }}>
          {pagina === 0 ? (
            <ul style={estilos.lista}>
              {dadosLivro.map(d => d.id > 0 && (
                <li 
                  key={d.id} 
                  style={estilos.item} 
                  onClick={() => setPagina(d.id)}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(26,35,126,0.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <span>{d.titulo}</span>
                  <span style={{ opacity: 0.7 }}>pág. {390 + d.id}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div style={{ animation: 'fadeIn 0.5s ease' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{atual.titulo}</h2>
              <p style={{ fontSize: '1.4rem', lineHeight: '1.8', textAlign: 'justify', fontStyle: 'serif' }}>
                {atual.texto}
              </p>
              <div style={estilos.snape}>
                <p style={{ fontSize: '1.1rem', marginBottom: '5px', opacity: 0.7, fontFamily: 'serif' }}>Anotação do Príncipe:</p>
                "{atual.anotacao}"
              </div>
            </div>
          )}
        </main>

        <footer style={estilos.botoesFooter}>
          <button 
            style={estilos.btn} 
            onClick={() => setPagina(0)}
          >
            Sumário
          </button>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              style={{ ...estilos.btn, opacity: pagina === 0 ? 0.3 : 1 }} 
              disabled={pagina === 0} 
              onClick={() => setPagina(pagina - 1)}
            >
              Anterior
            </button>
            <button 
              style={{ ...estilos.btn, opacity: pagina === dadosLivro.length - 1 ? 0.3 : 1 }} 
              disabled={pagina === dadosLivro.length - 1} 
              onClick={() => setPagina(pagina + 1)}
            >
              Próxima
            </button>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(43,29,14,0.2);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Livro;