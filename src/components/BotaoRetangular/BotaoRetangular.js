import React from "react";
import './BotaoRetangular.css';

export default function BotaoRetangular({ onClick, texto, botaoAtivo }) {
  return (
    <div className="botaoDiv">
      <button className={botaoAtivo ? "botaoAtivo" : "botao"} type="button" onClick={onClick}>{texto}</button>
    </div>
  );
}