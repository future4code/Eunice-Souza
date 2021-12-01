import React from "react"
// import {Box, Button, Zoom, Grid} from "@material-ui/core"
import { useHistory } from "react-router-dom"
// import { goToMyVideo } from "../../routes/coodinator"
// import FilmeCard from "../../components/FilmeCard/FilmeCard"
// import Header from "../../components/Header/Header"
// import { CircularProgress } from "@material-ui/core/CircularProgress"
// import Pagination from "@material-ui/lab/Pagination"
// import GlobalContext from "../../global/GlobalContex"
// import { useContext } from "react"

// const FilmeListItemPage =() => {
//     const history = useHistory()
//     const {state, setters} = useContex(GlobalContext)


// }

const HomePage = () => {
  const [inputValues, setInputValues] = React.useState({
    pesquisa: "",
  })

  const history = useHistory()

  // const goResults = () => {
  //   history.push("/results")
  // }

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value
    })
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
             <button onClick={() => history.push("/results")}>Buscar</button>
        {/* <button type="submit" onClick={goResults}> */}
          {/* Buscar */}
        {/* </button> */}
      </form>
    </div>
  );
};

export default HomePage
