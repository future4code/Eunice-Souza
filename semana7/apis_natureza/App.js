import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = {
    pokemons: []
  };

  componentDidMount() {
    this.getPokemons();
  }
  getPokemons = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    this.setState({ pokemons: response.data.results });
  };
  getPokePicture = async (event) => {
    console.log(event.target.value);
    const url = event.target.value;
    const response = await axios.get(`${url}`);
    console.log("Resposta getPicture: ", response.data);
  };

  render() {
    const listPoke = this.state.pokemons.map((poke) => {
      return (
        <option key={poke.name} value={poke.url}>
          {poke.name}
        </option>
      );
    });
    return (
      <div className="App">
        <h1>Pokemons</h1>
        <select onChange={this.getPokePicture}>{listPoke}</select>
      </div>
    );
  }
}
