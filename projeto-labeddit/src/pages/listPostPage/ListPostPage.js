import axios from "axios";
import React from "react";

const ListPostPage = () => {
  const [post, setPost] = React.useState("");
  const [titulo, setTitulo] = React.useState("");

  const pegaTextoPost = (event) => {
      const valorDigitado = event.target.value
    setPost(valorDigitado);
   };

  const pegaTituloPost = (event) => {
    setTitulo(event.target.value);
   
  };

  const PostUsuario = async (event) => {
    event.preventDefault();

    const url = "https://labeddit.herokuapp.com/posts";

    const body = {
      title: titulo,
      body: post,
    };
    const token = localStorage.getItem('token')

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

  return (
    <div>
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
    </div>
  );
};

export default ListPostPage;
