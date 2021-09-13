import React from 'react';
import './styles.css';

export default function Menu({ mudarParaExibicaoDeRefeicoes, mudarParaExibicaoDeCriacao }) {
  return (
    <div className="barra">

      <div className="botaoDiv">
        <button className="botao1" type="button" onClick={mudarParaExibicaoDeRefeicoes}>REFEIÇÕES</button>
      </div>

      <div className="botaoDiv">
        <button className="botao2" type="button" onClick={mudarParaExibicaoDeCriacao}>ADICIONAR NOVA</button>
      </div>

    </div>
  );
}