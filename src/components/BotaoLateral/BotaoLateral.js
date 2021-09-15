import React from "react";
import './BotaoLateral.css';


export default function BotaoLateral({ onClick, texto, botaoAtivo }) {
  return (
    <div className="botaoDiv">
      <button className={botaoAtivo ? "botaoAtivo" : "botao"} type="button" onClick={onClick}>{texto}</button>
    </div>
  );
}