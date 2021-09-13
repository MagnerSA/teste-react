import React from 'react';
import Formulario from '../Formulario/Formulario';
import Listagem from '../Listagem/Listagem';

export default function ConteudoPrincipal({ conteudoExibido, refeicoes, adicionarRefeicao }) {

  return (
    <div className="content">
      {
        (conteudoExibido == 'refeicoes')
          ? <Listagem refeicoes={refeicoes}></Listagem>
          : <Formulario adicionarRefeicao={adicionarRefeicao}></Formulario>
      }
    </div>
  );

}

