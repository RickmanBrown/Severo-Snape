import React, { useState } from 'react';

export const capitulos = [
  { 
    id: 0, 
    tipo: 'capa', 
    titulo: "Estudos Avançados no Preparo de Poções", 
    autor: "Libatius Borage",
    assinatura: "Propriedade do Príncipe Mestiço" 
  },
  { 
    id: 1, 
    tipo: 'indice', 
    titulo: "Índice" 
  },
  { 
    id: 2, 
    tipo: 'introducao', 
    titulo: "Introdução", 
    conteudoOriginal: "Este volume contém as técnicas mais refinadas para o preparo de elixires complexos. A paciência é a virtude do mestre em poções.",
    anotacoesSnape: "Borage é um tolo otimista. A paciência não substitui o talento." 
  },
  {
    id: 3,
    tipo: 'capitulo',
    titulo: "Poção do Morto-Vivo",
    conteudoOriginal: "Corte a vagem de Sopoforous com uma faca de prata sem corte para extrair o suco. Adicione à infusão de Losna...",
    anotacoesSnape: "Não corte! Esmague com a lateral da lâmina, libera muito mais suco. E mexa 7 vezes no sentido horário e uma no anti-horário."
  },
  {
    id: 4,
    tipo: 'capitulo',
    titulo: "Felix Felicis (Sorte Líquida)",
    conteudoOriginal: "Adicione o ovo de Cinzal na caldeira fervente, depois a raiz de escila...",
    anotacoesSnape: "A cor deve ser de ouro derretido. Se estiver turva, você falhou. Uma colher de mel de fada no final estabiliza a mistura."
  },
  {
    id: 5,
    tipo: 'capitulo',
    titulo: "Amortentia",
    conteudoOriginal: "A poção do amor mais poderosa do mundo. Possui brilho perolado e vapor em espirais características...",
    anotacoesSnape: "O cheiro varia para cada pessoa. Cuidado com a dosagem das folhas de menta, ou vira veneno."
  },
  {
    id: 6,
    tipo: 'capitulo',
    titulo: "Sectumsempra (Para Inimigos)",
    conteudoOriginal: null,
    anotacoesSnape: "SECTUMSEMPRA. Para inimigos. (Feitiço de corte profundo. Usar apenas em extrema necessidade)."
  }
];

const IconeFechar = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>;
const IconeAnterior = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>;
const IconeProxima = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
const IconeSumario = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6h16M4 12h16M4 18h7"/></svg>;

const Livro = ({ aoVoltar }) => {
  const [pagina, setPagina] = useState(0);
  const atual = capitulos[pagina];

  const estilos = {
    overlay: {
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      backgroundColor: '#1a1a1a', 
      zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '20px', boxSizing: 'border-box'
    },
    livroFisico: {
      backgroundColor: '#FAFAF8',
      maxWidth: '800px', width: '100%', height: '90vh',
      borderRadius: '4px 12px 12px 4px',
      boxShadow: '-10px 0 20px rgba(0,0,0,0.5), inset 15px 0 20px rgba(0,0,0,0.05)',
      display: 'flex', flexDirection: 'column', 
      overflow: 'hidden', position: 'relative'
    },
    paginaInterna: {
      flex: 1, overflowY: 'auto', padding: '60px 50px',
      display: 'flex', flexDirection: 'column',
      color: '#2b2b2b'
    },
    tituloBook: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '2.8rem', color: '#111', borderBottom: '1px solid #ddd', paddingBottom: '15px', marginBottom: '25px'
    },
    textoOriginal: {
      fontFamily: '"Lora", serif',
      fontSize: '1.25rem', lineHeight: '1.9', textAlign: 'justify', color: '#333'
    },
    snapeAnotacao: {
      fontFamily: '"Alex Brush", cursive', 
      color: '#0a1931', 
      fontSize: '2.4rem', marginTop: '35px', padding: '15px 20px',
      borderLeft: '2px solid rgba(10, 25, 49, 0.2)', backgroundColor: 'rgba(10, 25, 49, 0.02)',
      lineHeight: '1.3'
    },
    btnControle: {
      background: 'transparent', border: '1px solid #ddd', borderRadius: '4px',
      padding: '10px 20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px',
      fontFamily: '"Lora", serif', fontSize: '1rem', color: '#555', transition: 'all 0.3s'
    }
  };

  const renderPagina = () => {
    if (atual.tipo === 'capa') {
      return (
        <div style={{ margin: 'auto', textAlign: 'center', animation: 'fadeIn 0.8s ease' }}>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '3.5rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#111', marginBottom: '20px' }}>
            {atual.titulo}
          </h1>
          <p style={{ fontFamily: '"Lora", serif', fontSize: '1.2rem', letterSpacing: '5px', color: '#666', textTransform: 'uppercase' }}>
            {atual.autor}
          </p>
          <div style={{ fontFamily: '"Alex Brush", cursive', color: '#0a1931', fontSize: '3rem', marginTop: '100px' }}>
            {atual.assinatura}
          </div>
        </div>
      );
    }

    if (atual.tipo === 'indice') {
      return (
        <div style={{ animation: 'fadeIn 0.5s ease', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
          <h2 style={estilos.tituloBook}>Conteúdo</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '30px' }}>
            {capitulos.map((cap, index) => index > 1 && (
              <li 
                key={cap.id} 
                style={{ fontFamily: '"Lora", serif', fontSize: '1.3rem', padding: '15px 0', borderBottom: '1px solid #eee', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', color: '#444' }}
                onClick={() => setPagina(index)}
                onMouseEnter={(e) => e.currentTarget.style.color = '#000'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#444'}
              >
                <span>{cap.titulo}</span>
                <span style={{ color: '#999' }}>pág. {index + 390}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return (
      <div style={{ animation: 'fadeIn 0.5s ease', maxWidth: '650px', margin: '0 auto' }}>
        <h2 style={estilos.tituloBook}>{atual.titulo}</h2>
        {atual.conteudoOriginal ? (
          <p style={estilos.textoOriginal}>{atual.conteudoOriginal}</p>
        ) : (
          <p style={{ ...estilos.textoOriginal, fontStyle: 'italic', opacity: 0.6, textAlign: 'center', padding: '20px 0' }}>
            (Conteúdo original não legível ou inexistente nesta página)
          </p>
        )}
        {atual.anotacoesSnape && (
          <div style={estilos.snapeAnotacao}>
            "{atual.anotacoesSnape}"
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={estilos.overlay}>
      <button 
        style={{ position: 'absolute', top: 30, right: 40, background: 'none', border: 'none', color: '#fff', cursor: 'pointer', opacity: 0.7, transition: 'opacity 0.2s' }} 
        onClick={aoVoltar}
        onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
        onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
      >
        <IconeFechar />
      </button>

      <div style={estilos.livroFisico}>
        <div style={estilos.paginaInterna} className="custom-scrollbar">
          {renderPagina()}
        </div>

        <footer style={{ padding: '20px 40px', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}>
          <button style={estilos.btnControle} onClick={() => setPagina(1)} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <IconeSumario /> Índice
          </button>
          
          <div style={{ display: 'flex', gap: '15px' }}>
            <button 
              style={{ ...estilos.btnControle, opacity: pagina === 0 ? 0.3 : 1, cursor: pagina === 0 ? 'default' : 'pointer' }} 
              disabled={pagina === 0} 
              onClick={() => setPagina(pagina - 1)}
              onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = '#f5f5f5')} 
              onMouseLeave={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <IconeAnterior /> Anterior
            </button>
            <button 
              style={{ ...estilos.btnControle, opacity: pagina === capitulos.length - 1 ? 0.3 : 1, cursor: pagina === capitulos.length - 1 ? 'default' : 'pointer' }} 
              disabled={pagina === capitulos.length - 1} 
              onClick={() => setPagina(pagina + 1)}
              onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = '#f5f5f5')} 
              onMouseLeave={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Próxima <IconeProxima />
            </button>
          </div>
        </footer>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&family=Lora:ital,wght@0,400;0,500;1,400&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
        
        @keyframes fadeIn { 
          from { opacity: 0; transform: translateY(10px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e0e0e0; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #ccc; }
      `}</style>
    </div>
  );
};

export default Livro;