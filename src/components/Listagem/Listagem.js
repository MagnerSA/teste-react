import React from 'react';
import CardRefeicao from '../CardRefeicao/CardRefeicao';
import './styles.css';


export default function Listagem({ refeicoes, deletar }) {
  return (
    <>
      <div className="legenda">
        <div className="name">
          NOME
        </div>

        <div className="purchaseDay">
          COMPRADO EM
        </div>

        <div className="portion">
          PORÇÃO
        </div>

        <div className="price">
          PREÇO
        </div>
        <div className="weight">
          PESO
        </div>


      </div>
      <div className="listagem">
        <ul>
          {Array.from(refeicoes.values()).map(
            (r) => {

              return (
                // <li key={r.id} > {r.name} </li>
                <CardRefeicao key={r.id} refeicao={r} deletar={() => { deletar(r.id); console.log("UE"); }}></CardRefeicao>
              )
            })
          }
        </ul>
      </div>
    </>
  );
}