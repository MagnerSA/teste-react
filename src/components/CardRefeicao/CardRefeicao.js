import React from "react";
import './styles.css';

export default function CardRefeicao({ refeicao, deletar }) {

  const listaData = refeicao.purchaseDay.split('-');
  const data = `${listaData[2]}/${listaData[1]}/${listaData[0]}`;
  const preco = `R$ ${parseFloat(refeicao.approximatePrice).toFixed(2)}`;
  const weight = `${refeicao.portion}g`;



  return (
    <div className="card">

      <div className="name">
        {refeicao.name}
      </div>

      <div className="purchaseDay">
        {data}
      </div>

      <div className="portion">
        {refeicao.fraction}
      </div>

      <div className="price">
        {preco}

      </div>
      <div className="weight">
        {weight}

      </div>

      <button className="delete" type="button" onClick={deletar}>
        {"Remover"}
      </button>
    </div>
  );
}