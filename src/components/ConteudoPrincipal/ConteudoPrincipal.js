import React from 'react';
import Formulario from '../Formulario/Formulario';
import Listagem from '../Listagem/Listagem';

import './styles.css';


export default function ConteudoPrincipal({ conteudoExibido, refeicoes, adicionarRefeicao, deleteRefeicao }) {

  return (
    <div className="content">
      {
        (conteudoExibido == 'refeicoes')
          ? <Listagem className='listagem' refeicoes={refeicoes} deletar={deleteRefeicao}></Listagem>
          : <Formulario className='formulario' adicionarRefeicao={adicionarRefeicao}></Formulario>
      }
    </div>
  );

}

