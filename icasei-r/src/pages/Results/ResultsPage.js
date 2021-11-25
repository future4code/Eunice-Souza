import React from "react"
import { useHistory } from "react-router-dom";

const ResultsPage = () => {
  const [pegaCurtidas, setPegaTotalCurtidas] = React.useState({
    buscar:"",
  })

  const history = useHistory()

  const goResultsNotFoundPage = () => {
    history.push("/resultsNotFound")
  }

  const url =
    "https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=%7Btermo_de_busca%7D&key=%7BAPI_KEY%7D";

    const totalCurtidas = async () => {
    const res = await fetch("https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=%7Btermo_de_busca%7D&key=%7BAPI_KEY%7D")
    const data = await res.json()

    setPegaTotalCurtidas(data.next)
   console.log(data)


    // axios
    //   .get(url)
    //   .then((response) => {})
    //   .catch((error) => console.log(error));
  }

  // React.useEffect(() => {
  //   totalCurtidas()
    
  // }, [])

  return (
    <div>
      <p>ResultsPage</p>
      <form onSubmit={ResultsPage}>
        <input
          name="Curtida"
          required
          onChange={totalCurtidas}
          type="text"
          placeholder="Nome do filme"
        />
      </form>
      <ul>
        <div>
          <button onClick={"Gostei"}>Gostei</button>
          <span> {totalCurtidas} </span>
          <button onClick={"Não gostei"}>Não gostei</button>
        </div>
      </ul>
    </div>
  );
};

export default ResultsPage;
