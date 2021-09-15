import React from 'react';
import BotaoLateral from '../BotaoLateral/BotaoLateral';
import './styles.css';

export default function Menu({ mudarParaExibicaoDeRefeicoes, mudarParaExibicaoDeCriacao, telaExibida }) {
  return (
    <div className="barra">

      <BotaoLateral onClick={mudarParaExibicaoDeRefeicoes} texto={"REFEIÇÕES"} botaoAtivo={telaExibida == "refeicoes"}></BotaoLateral>

      <BotaoLateral onClick={mudarParaExibicaoDeCriacao} texto={"ADICIONAR NOVA"} botaoAtivo={telaExibida == "criacao"}></BotaoLateral>

    </div>
  );
}