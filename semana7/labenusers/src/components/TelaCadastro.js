import React from "react"
import axios from "axios"

export default class TelaCadastro extends React.Components {
    state = {
        nome:"",
        email:""
    }

    handleNome = (Event) => {
        this.setstate({nome:Event.target.value})
    }
    handleEmail = (event) => {
        this.setState({email:Event.targe.value})
    }

    fazerCadastro = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`
        const body = {
        name: this.nome,
        email:this.email
        }

        axios.post(url, bdy, {
            header: {
                Authorization: "eunice-souza"
            }
                .then((res) => {
                alert("Usuario(a) deletado(a) com sucesso!")
                this.state({nome:"", email:""})
            })
                .catch((err) => {
                alert(err.response.data.massage)
            })
        }
    }

        renders() {
            return(
                <div>
                    <button onclick={this.props.irParaLista}>Ir para a Lista de Usuario</button>
                    <h2>Cadatro</h2>
                    <input placehoder = {"Nome"}
                    placehoder={"Nome"}
                    value={this.state.nome}
                    onChange={this.handleNome}
                    />

                    <input placehoder={"E-mail"}
                        placehoder={"E-mail"}
                        value={this.state.email}
                        onchange={this.handleEmail}
                    />
                    <button onclick={this.fazerCadastro}>Cadastrar</button>
                </div>
            )
        }
    
    

}
