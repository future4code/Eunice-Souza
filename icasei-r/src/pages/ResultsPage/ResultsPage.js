import React from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

const ResultsPage = () => {
  const [pegaCurtidas, setPegaTotalCurtidas] = React.useState({
    buscar: "",
  });

  const history = useHistory();

  const somaCurtidas = () => {
    setPegaTotalCurtidas(pegaCurtidas + 1);
  };

  const totalCurtidas = async () => {
    const res = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=%7Btermo_de_busca%7D&key=%7BAPI_KEY%7D"
    );
    const data = await res.json();

    setPegaTotalCurtidas(data.next);
    console.log(data);

    axios
      .get(
        "https://www.googleapis.com/youtube/v3/search?part=id,snippet&q={termo_de_busca}&key={API_KEY}"
      )
      .then((response) => {})
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    totalCurtidas();
  }, []);

  return (
    <div>
      <form onSubmit={ResultsPage}>
        <input
          name="Buscar"
          required
          onChange={totalCurtidas}
          type="video"
          placeholder="Nome do filme"
        />

        <button onClick={() => history.push("/results")}>Buscar</button>
      </form>

      <ul>
        <div>
          <button color={"primary"} onClick={() => history.push("/details")}>
            Gostei
          </button>
          <span> {somaCurtidas} </span>
          <button onClick={() => history.push("/error")}>Não Gostei</button>
          <button onClick={() => history.push("/")}>Voltar</button>
        </div>
      </ul>
    </div>
  );
};

export default ResultsPage;
