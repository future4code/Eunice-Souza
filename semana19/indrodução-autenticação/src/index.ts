import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { login } from "./endpoints/login"
import { v4 } from "uuid"
import { IdGenerator } from "./services/IdGenerator"
import { sign, verify } from "jsonwebtoken"


const id = v4();

app.post('/users/signup', createUser)
app.post("/users/login", login)
app.put('/users/', editUser)

//  formas de codigo
const Id = new IdGenerator()

// const id =  idGenerator.generateId()
// console.log(id)

// console.log(new IdGenerator().generateId)
const token = sign(
    {id:"id do usuário"},
    "string longa e alatória (por segurança) para gerar a assinatura dos nossos token",
    // pode passar um treceiro parametro
    {expiresIn: "10h"}
    // dentro de uma string pode ser: minutos, dias etc...
)  

const tokenData = verify(
    token,
    "segredo errado"
)
console.log(tokenData)
 