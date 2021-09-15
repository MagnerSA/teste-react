import React from 'react';
import BotaoRetangular from '../BotaoRetangular/BotaoRetangular';
import ItemFormulario from '../ItemFormulario/ItemFormulario';
import './styles.css';

export default function Formulario({ adicionarRefeicao }) {
  return (
    <div className="formulario">
      <>
        <ItemFormulario type="text" id="name" title={"NOME"}></ItemFormulario>
        <ItemFormulario type="date" id="purchaseDay" title={"DATA DE COMPRA"}></ItemFormulario>
        <ItemFormulario type="number" id="weight" title={"PESO TOTAL (EM GRAMAS)"}></ItemFormulario>
        <ItemFormulario type="number" id="price" title={"PREÇO TOTAL (EM REAIS)"}></ItemFormulario>
        <ItemFormulario type="number" id="portions" title={"PORÇÕES"}></ItemFormulario>

        <BotaoRetangular onClick={adicionarRefeicao} texto={"ADICIONAR"} botaoAtivo={true} ></BotaoRetangular>
      </>
    </div>

  );
}