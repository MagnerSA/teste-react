import React from 'react';

export default function Formulario({ adicionarRefeicao }) {
  return (
    <div>
      <>
        Nome: <input type="text" id="name" />
        <br />
        Data da Compra: <input type="date" id="purchaseDay" />
        <br />
        Peso total: <input type="number" id="weight" />
        <br />
        Preço total: <input type="number" id="price" />
        <br />
        Número de porções: <input type="number" id="portions" />
        <br />
        <br />
        <button type="button" onClick={adicionarRefeicao}>ADICIONAR</button>

      </>
    </div>

  );
}