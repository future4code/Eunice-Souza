import React, { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage/HomePage';
import { MatchesPage } from './pages/MatchesPage/MatchesPage';




const [telaAtual, setTelaAtual] = useState("homePage")


const escolherTela = () => {
  switch (telaAtual) {
    case "homePage":
      return <MatchesPage />

    case "matchesPage":
      return < HomePage />

    default:
      return <HomePage />

  }
  const mudarTela = (mudarTela)
  setTelaAtual("Home")


  return (
    <div>
      <h1>Astromtch</h1>
      <button onclick={() => mudarTela("HomePage")}>ir Matches</button>
      <button onclick={() => mudarTela("MatchesPage")}>ir Home</button>
      {escolherTela()}
    </div>
  )
}


export default App




















