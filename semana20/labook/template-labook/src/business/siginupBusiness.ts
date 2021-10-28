import { generateId } from "../services/IdGenerator";
import { generateToken } from "../services/Authenticator";
import { hash } from "../services/hashManager";
import { insertUser } from "../data/insertUser"



export const signupBusiness = async (input: any) => {


    const { name, nickname, email, password, role } = input

    if (
        !name ||
        !nickname ||
        !email ||
        !password ||
        !role
    ) {
        throw new Error('Preencha os campos "nome", "nickname", "email" e "password"')
    }

    const id: string = generateId()

    const cypherPassword = await hash(password);

    await insertUser({
        id,
        nickname,
        email,
        password: cypherPassword,
        role
    })

    const token: string = generateToken({
        id,
        role: role
    })

    return token

    // res
    //     .status(201)
    //     .send({
    //         message: "Usúario criado!",
    //         token
    //     })




}