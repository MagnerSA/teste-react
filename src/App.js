import React, { useState, useEffect } from 'react';

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

import './App.css';
import { listaDeRefeicoes } from './mock/refeicoes';
import ConteudoPrincipal from './components/ConteudoPrincipal/ConteudoPrincipal';

function App() {

  const [refeicoes, alterarRefeicoes] = useState(new Map());
  const [telaExibida, alterarTelaExibida] = useState('refeicoes');

  useEffect(() => {
    alterarRefeicoes(new Map([...refeicoes, ...listaDeRefeicoes]));

  }, []);


  function mudarParaExibicaoDeRefeicoes() {
    alterarTelaExibida('refeicoes');
  }

  function mudarParaExibicaoDeCriacao() {
    alterarTelaExibida('criacao');
  }

  // localStorage

  function addRefeicao() {
    var novoIndex = refeicoes.size + 1;
    var novasRefeicoes = new Map();

    const numeroDePorcoes = document.getElementById("portions").value;
    const pesoDasPorcoes = document.getElementById("weight").value / numeroDePorcoes;
    const precoDasPorcoes = document.getElementById("price").value / numeroDePorcoes;

    for (let i = 0; i < numeroDePorcoes; i++) {
      var novaRefeicao = {
        id: novoIndex,
        name: document.getElementById("name").value,
        purchaseDay: document.getElementById("purchaseDay").value,
        portion: pesoDasPorcoes.toFixed(2),
        fraction: (numeroDePorcoes == 1) ? "1" : `${i + 1}/${numeroDePorcoes}`,
        approximatePrice: precoDasPorcoes.toFixed(2),
      };

      novasRefeicoes.set((novoIndex.toString()), novaRefeicao);

      novoIndex++;
    }

    alterarRefeicoes(new Map([...refeicoes, ...novasRefeicoes]));
    // alterarIndexAtual(novoIndex);
    mudarParaExibicaoDeRefeicoes();
  }

  console.log(refeicoes.size);

  return (
    <>

      <Menu className="menu" mudarParaExibicaoDeRefeicoes={mudarParaExibicaoDeRefeicoes} mudarParaExibicaoDeCriacao={mudarParaExibicaoDeCriacao} />
      <Header className="header" name={telaExibida} />
      <ConteudoPrincipal className="content" conteudoExibido={telaExibida} refeicoes={refeicoes} adicionarRefeicao={addRefeicao} />
    </>
  );
}

export default App;