import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const [inputValues, setInputValues] = React.useState({
    pesquisa: "",
  });

  const history = useHistory();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={HomePage}>
         <input
          name="Pesquisar"
          required
          onChange={handleInput}
          type="video"
          placeholder="Pesquisar por vídeos"
        /> 
        <button onClick={() => history.push("/results")}>Buscar</button>
      </form>
    </div>
  );
};

export default HomePage;
