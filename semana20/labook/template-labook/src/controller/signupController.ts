import { Request, Response } from "express";
import { signupBusiness } from "../business/siginupBusiness";



export const signupController = async (
    req: Request,
    res: Response
) =>{
    try {
        const { name, nickname, email, password, role } = req.body

        const token = await signupBusiness({name, nickname, email, password})
        
        //     if (
        //         !name ||
        //         !nickname ||
        //         !email ||
        //         !password ||
        //         !role
        //     ) {
        //         throw new Error('Preencha os campos "nome", "nickname", "email" e "password"')
        //     }

        //     const id: string = generateId()

        //     const cypherPassword = await hash(password);

        //     await insertUser({
        //         id,
        //         nickname,
        //         email,
        //         password: cypherPassword,
        //         role
        //     })

        // const token: string = generateToken({
        //     id,
        //     role: role
        // })
        res
            .status(201)
            .send({
                message: "Usúario criado!",
                token
            })

    }catch (error: any) {
        res.status(400).send(error.message)
    }


}