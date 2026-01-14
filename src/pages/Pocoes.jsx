import React from 'react';

const Pocoes = ({aoVoltar}) => {
    return(
        <div className='mensagem-secreta'>
            <h2>Estudos de Poções Avançadas</h2>
            <div className="divider"></div>
            <p>Aqui jazem as receitas editadas pelo Príncipe Mestiço.</p>
            <button className="back-button" onClick={aoVoltar}>Voltar</button>
        </div>
    )
};
export default Pocoes;