import React from "react";
import { useHistory } from "react-router-dom";
// import styled from "styled-components";

const HomePage = () => {

  const [inputValues, setInputValues] = React.useState({
    pesquisa: "",
  });

  const history = useHistory()

  const goResults = () => {
    history.push("/results")
  }

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

    return (
      <div>
        <form onSubmit={HomePage}>
          <input
            name="Pesquisar"
            required
            onChange={handleInput}
            type="text"
            placeholder="Pesquisar"
          />

          <button type="submit" onClick={goResults}>Buscar</button>
        </form>
      </div>
    );
};


export default HomePage;
