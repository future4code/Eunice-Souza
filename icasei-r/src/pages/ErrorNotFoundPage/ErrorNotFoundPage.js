import React from "react";
import { useHistory } from "react-router-dom";

const ErrorNotFoundPage = () => {
  const [inputValues, setInputValues] = React.useState({});

  const history = useHistory();

  return (
    <div>
      <form onSubmit={ErrorNotFoundPage}>
        <input
          name="Curtida"
          required
          onChange={"Error ultilize outra chave"}
          type="text"
          placeholder="Utilize outra chave"
        />
      </form>
      <ul>
        <div>
          <span> {"Vídeo não encontrado"} </span>
          <button onClick={() => history.push("/results")}>Voltar</button>
          {/* <button onClick={"Error ultilize outra chave"}></button> */}
        </div>
      </ul>
    </div>
  );
};

export default ErrorNotFoundPage;
