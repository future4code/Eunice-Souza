import React from "react";
import axios from "axios";

const PostPage = () => {
  const [comentario, setComentario] = React.useState("");

  const pegaTextoComentario = (event) => {
    console.log(comentario);
    setComentario(event.target.value);
  };
  const ComentarioUsuario = async (event) => {
    event.preventDefault();

    const url = "https://labeddit.herokuapp.com/comments/:id/votes";

    const body = {
      direction: 1,
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
      console.log(response)
      alert('error');
    }
      finally {
        return  response
      }
    }

  return (
    <div>
      <h1>PostPage</h1>
      <form onSubmit={ComentarioUsuario}>
        <input
          nome="usuario"
          required
          onChange={pegaTextoComentario}
          type="text"
          placeholder="texto do comentario"
          />

          <button type="submit">Comentario</button>
      </form>
    </div>
  );

};
export default PostPage;
