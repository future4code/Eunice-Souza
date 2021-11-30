import React from "react"
import { useHistory } from "react-router-dom";

const ResultsPage = () => {
  const [pegaCurtidas, setPegaTotalCurtidas] = React.useState({
    buscar:"",
  })

  const history = useHistory()

  const goResults =() => {
    history.push("/resultsNotFound")
  }

  const somaCurtidas =() => {
      setPegaTotalCurtidas(pegaCurtidas + 1)
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
    //   .catch((error) => console.log(error))
  }

  React.useEffect(() => {
    totalCurtidas()
    
  }, [])

 



  return (
    <div>
      <p>ResultsPage</p>
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
        <div>
          <button onClick={"goResultsNotFond"}>Gostei</button>
          <span> {somaCurtidas} </span>
          <button onClick={"Não gostei"}>Não gostei</button>
        </div>
      </ul>
    </div>
  );
};

export default ResultsPage;
