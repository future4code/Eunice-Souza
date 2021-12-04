import React from "react";
import { useHistory } from "react-router-dom";

const ResultsPage = () => {
  const [pegaCurtidas, setPegaTotalCurtidas] = React.useState({
    buscar: "",
  });

  const history = useHistory();

  

  const somaCurtidas = () => {
    setPegaTotalCurtidas(pegaCurtidas + 1);
  };

  // const url =
  //   "https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=%7Btermo_de_busca%7D&key=%7BAPI_KEY%7D"

  const totalCurtidas = async () => {
    const res = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=%7Btermo_de_busca%7D&key=%7BAPI_KEY%7D"
    );
    const data = await res.json();

    setPegaTotalCurtidas(data.next);
    console.log(data);

    // axios
    //   .get(url)
    //   .then((response) => {})
    //   .catch((error) => console.log(error))
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
          type="text"
          placeholder="Nome do filme"
        />
      </form>

      <ul>
      {/* {List.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.curtidas}</a>
            </li>
          ))} */}
        <div>
          

            {/* {List.map(item =>(
              <li key={item.id}>
                <a href={item.url}>{item.curtidas}</a>
                <button onClick={() => history.push("/error")}>Não Gostei</button>
              </li>
            ))} */}
           



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
