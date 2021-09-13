import React from 'react';

export default function ConteudoPrincipal({ conteudoExibido, refeicoes, adicionarRefeicao }) {

  if (conteudoExibido == 'refeicoes') {
    return (
      <ul>
        {refeicoes.map(
          (r) => {
            return (
              <li key={r.id} > {r.name} </li>
            )
          }
        )}
      </ul>
    );
  } else if (conteudoExibido == 'criacao') {
    return (
      <>
        Nome: <input type="text" id="txtnome" />


        <button type="button" onClick={adicionarRefeicao}>ADICIONAR</button>
      </>
    );
  }


}