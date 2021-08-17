import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";

export default App 


const App = () => {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")
  




  const getPoke = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        usePokeList({ pokeList: response.data.results });
      })
      .catch(err => {
        console.log(err)
      });
  };


  const usePokeName= (event) => {
  setPokeName(event.target.value)
  };

  return (
    <div>
      <select onchange={changePokeName}>
      <option value={""}>Nenhuma</option>
        {pokeList.map(pokemon => {
            return (
              <option key={"pokemon.name"} value={pokemon.Name}>
                {pokemon.name}
              </option>
            );
          })}
        </select >
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );

}


  

