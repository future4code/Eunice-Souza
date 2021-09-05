import axios from "axios";
import React from "react";
import { useHistory } from "react-router";

const ListPostPage = () => {
  const [post, setPost] = React.useState("");
  const [titulo, setTitulo] = React.useState("");
  // const [totalPosts, setTotalPosts] = React.useState([]);
  // const history = useHistory();
  // const [itemcurtidas, setItemCurtidas] = React.useState([0]);
  // const listCurtidas=curtidas.map(
  //   (c) =>
  //   <li>{c}</li>
  // )
  // const [totalCurtidas, setTotalCurtidas] = React.useState(0);

  const pegaTextoPost = (event) => {
    const valorDigitado = event.target.value;
    setPost(valorDigitado);
  };

  const pegaTituloPost = (event) => {
    setTitulo(event.target.value);
  };

  // const pegaItemPost = (event) =>
  //   setItemCurtidas(event.targe.value);

  const PostUsuario = async (event) => {
    event.preventDefault();

    const url = "https://labeddit.herokuapp.com/posts";

    const body = {
      title: titulo,
      body: post,
    };
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        ContentType: "application/json",
        Authorization: token,
      },
    };

    let response;
    try {
      response = await axios.post(url, body, headers);
    } catch (err) {
      response = null;
      alert("error");
    } finally {
      return response;
    }
  };
  const gostei = () => {
    setTotalCurtidas(totalCurtidas + 1);
  };
  const naoGostei = () => {
    setTotalCurtidas(totalCurtidas - 1);
  };

  const getPosts = async () => {
    const url = "https://labeddit.herokuapp.com/posts";

    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        ContentType: "application/json",
        Authorization: token,
      },
    };
    let response;
    try {
      response = await axios.get(url, headers);
    } catch (err) {
      response = null;
    } finally {
      setCurtidas(response.data.curtidas);
      return response;
    }
  };

  React.useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {/* <ul>{listaCurtidas}</ul>
      {curtidas.map((curtidas) => {
         return <p>{curtidas}</p>;
      })} */}
     
   )
      <h1>ListPostPage</h1>
      <form onSubmit={PostUsuario}>
        <input
          name="Post"
          required
          onChange={pegaTextoPost}
          type="text"
          placeholder="Escreva seu post"
        />
        <input
          name="title"
          required
          onChange={pegaTituloPost}
          type="text"
          placeholder="title do post"
        />
        <button type="Submit">Postar</button>
      </form>

      <ul>
        <li>
        {/* {listaCurtidas}
        {curtidas.map((curtidas) => {
         return <p>{curtidas}</p>;
        })} */}
          {/* {pegaItens.map((pegaItens) => (key = { item }))} */}
          <p>Nome do usuario</p>
          <p>Texto do usuario</p>
          <div>
            <button onClick={gostei}>Gostei</button>
            <span> {totalCurtidas} </span>
            <button onClick={naoGostei}>Não Gostei</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ListPostPage;
