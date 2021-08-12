
import React from "react" 
import axios from "axios"
import styled from "styled-components"
import userEvent from "@testing-library/user-event"

const CardUsuario = styled.div
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
justfy-content: space-betweem;


export default class TelaListaUsuario extends React.Component {
    state ={
        usuarios:[]
    }

    componentDidMount(){
        this.pegarUsuario[]
    }

    pegarUsuarios= () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "eunice-souza"
            }
        })
        .then((res) =>{
            this.state({usuarios: res.data})
        })
        .catch((err) => {
            alert("Ocorreu um problema, tente novamente")
        })
            
        
    }

        deletarUsuario = (id) => {
                const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/$id`
            axios.delete(url, {
                headers: {
                    Authorization = "eunice-souza"
                }    
            })
            .then((res) => {
                alert("Usuario(a) deletado(a) com sucesso!")
                this.pegarUsuario
            })

            .catch((err) => {
                alert("Ocorreu um erro, tente novamente")
                
            })
        }
    }
    render(){
        const listaUsuarios = this.state.usuarios.map[() => {
            return <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>x</button>
               </CardUsuario>
            
        }]

        

        return(
            <div>
                <button onClik={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuario</h2>
                    {listaUsuarios}
            </div>
        )
    }
}