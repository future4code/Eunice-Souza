import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const history = useHistory();

  const pegaTextosEmail = (event) => {
    setEmail(event.target.value);
  };
  const pegaTextosSenha = (event) => {
    setSenha(event.target.value);
  };
  const LoginUsuario = async (event) => {
    event.preventDefault();

    const url = "https://labeddit.herokuapp.com/users/login";
    const body = {
      email: email,
      password: senha,
    };
    const headers = {
      headers: {
        ContentType: "application/json",
      },
    };

    let response;
    try {
      response = await axios.post(url, body, headers);
    } catch (err) {
      response = null;
      alert("error");
    } finally {
      if (response !== null) {
        history.push("/");
      }
      console.log(response.data.token)
      localStorage.setItem("token", response.data.token)
      return response;
    }
  };

  return (
    <div>
      <h1>LoginPage</h1>

      <form onSubmit={LoginUsuario}>
        <input
          name="email"
          required
          onChange={pegaTextosEmail}
          type="email"
          placeholder="Email"
        />
        <input
          name="senha"
          required
          onChange={pegaTextosSenha}
          type="password"
          placeholder="senha"
        />
        <button type="submit">Entrar</button>
        <button>Cadastrar</button>
      </form>
    </div>
  );
};

export default LoginPage;

// 1 - Obter texto escrito pelo usuario atravez dos inputs.
//  passo um - criar uma função responsavel por obter o texto escrito pelo usuario.
//  passo dois - executar a função criada toda vez que o usuario digitar no input, atravez
// do evento onChange.
//  passo tres - dentro da função criada, obter os textos dos inputs atravez do parametro
// event.
// passo quatro - criar um estado para cada input e armazenar os textos digitados nos estados.

//5 - criar uma função assincrona
//  - executar a função assincrona criada toda vez que um evento de submit ocorrer.
