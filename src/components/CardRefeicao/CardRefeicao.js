import React from "react";
import './styles.css';

export default function CardRefeicao({ refeicao }) {
  return (
    <div className="card">
      {refeicao.name}
      {/* <button className={botaoAtivo ? "botaoAtivo" : "botao"} type="button" onClick={onClick}>{texto}</button> */}
    </div>
  );
}