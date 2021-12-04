import React from "react";
import { useHistory } from "react-router-dom";

const DetailsPage = () => {
  const [titulo, setTitulo] = React.useState("");

  const history = useHistory();

  return (
    <div>
      <p>DetailsPage</p>
      <form>
        <button onClick={() => history.push("/")}>Clicar</button>
        {/* <button type="submit">Clicar</button> */}
      </form>
    </div>
  );
};
export default DetailsPage;
