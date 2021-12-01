import React from "react";
import { useHistory } from "react-router-dom";

const ErrorNotFoundPage = () => {
  const [inputValues, setInputValues] = React.useState({});

  const history = useHistory();

  //   const goErrorNotFoundPage  = () => {
  //     history.push("/Datails")
  //     console.log(history)
  //   }

  //   const handleInput = (event) => {
  //     const { name, value } = event.target;
  //     setInputValues({
  //       ...inputValues,
  //       [name]: value,
  //     });
  //   };

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
         
          {/* <button onClick={"Gostei"}>voltar</button> */}
          <span> {"Vídeo não encontrado"} </span>
          <button onClick={() => history.push("/results")}>Voltar</button>
          {/* <button onClick={"Error ultilize outra chave"}></button> */}
        </div>
      </ul>
    </div>
  );
};

export default ErrorNotFoundPage;
