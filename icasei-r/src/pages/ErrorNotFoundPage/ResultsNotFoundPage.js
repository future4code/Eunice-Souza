import React from "react"



const ResultsNotFoundPage = () => {
  const [inputValues, setInputValues] = React.useState({

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
  };


    return (
    <div>
        <p>ResultsNotFoundPage</p>
      <form onSubmit={ResultsNotFoundPage}>
        <input
          name="Curtida"
          required
          onChange={"Termo de busca"}
          type="text"
          placeholder="Busca não encontrada"
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

export default ResultsNotFoundPage;

 