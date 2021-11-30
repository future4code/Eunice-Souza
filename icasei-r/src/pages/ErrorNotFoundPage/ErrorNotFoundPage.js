import React from "react"
import { useHistory } from "react-router-dom";




const ErrorNotFoundPage = () => {
  const [inputValues, setInputValues] = React.useState({

  });

  const history = useHistory()

  const goErrorNotFoundPage  = () => {
    history.push("/Datails")
    console.log(history)
  }

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };


    return (
    <div>
        <p>ErrorNotFoundPage</p>
      <form onSubmit={ErrorNotFoundPage}>
        <input
          name="Curtida"
          required
          onChange={"Termo de busca"}
          type="text"
          placeholder="Pagina não encontrada"
        />
      </form>
      <ul>
        <div>
          <button onClick={"Gostei"}>voltar</button>
          <span> {"Tente novamente"} </span>
          <button onClick={"Não gostei"}>Utilize outra chave</button>
        </div>
      </ul>
    </div>
  );
};

export default ErrorNotFoundPage

 