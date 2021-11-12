import { compare } from "../services/hashManeger",
import {selectUserByEmail} from "../data/selectUserByEmail",
import {generaToken} from "../services/Authenticator"
import {user} from "../types/user"

type LoginInput ={
    email: any
    password: any
}

export const loginBusiness = async (input: LoginInput): Promise<string> =>{

    try{
        const {email, password,} = input

        if(!email || !password) {
            throw new Error("'email' e 'senha' são obrigatórios")
        }

        const user: user = await selectUserByEmail(email)

        if (!user) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const passwordIsCorrect: boolean = await compare(password,user.password)

        const token: string = generateToken({
            id: user.id,
            role: user.role
        })

        return token

   
}