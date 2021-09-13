import React, { useState, useEffect } from 'react';

import Header from "./components/Header"
import Contador from './components/Contador';
import Botao from './components/Botao';

// import './App.css';
import backgroundImage from './assets/background.jpg';
import { listaDeRefeicoes } from './mock/refeicoes';
import ConteudoPrincipal from './components/ConteudoPrincipal';

function App() {

  const [refeicoes, alterarRefeicoes] = useState([]);
  const [telaExibida, alterarTelaExibida] = useState('refeicoes');

  useEffect(() => {
    alterarRefeicoes([...refeicoes, ...listaDeRefeicoes]);
  }, []);

  function mudarParaExibicaoDeRefeicoes() {
    alterarTelaExibida('refeicoes');
  }
  function mudarParaExibicaoDeCriacao() {
    alterarTelaExibida('criacao');
  }

  function addRefeicao() {
    // const novaRefeicao = {
    //   id: 7,
    //   name: "Uva",
    //   purchaseDay: Date(2021, 11, 11),
    //   portion: 1,
    //   fraction: "0",
    //   approximatePrice: 4,
    // };

    // alterarRefeicoes([...refeicoes, novaRefeicao]);
    console.log(document.getElementById("txtnome").value);

  }

  return (
    <>
      <Header />
      <center>
        <button type="button" onClick={mudarParaExibicaoDeRefeicoes}>REFEIÇÕES</button>
        <button type="button" onClick={mudarParaExibicaoDeCriacao}>ADICIONAR NOVA</button>
      </center>

      <ConteudoPrincipal conteudoExibido={telaExibida} refeicoes={refeicoes} adicionarRefeicao={addRefeicao} />


    </>
  );
}

export default App;