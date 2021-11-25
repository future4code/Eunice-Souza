import { Request, Response } from "express";
import insertUsers from "./insertUsers";

export default async function createUsers(
    req: Request,
    res: Response
) {
    try {

        if(
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email ||
        ) 
            res
                .status(400)
                .send('Preencha os campos "name", "nickName" e "email"')

                return


        const id: string = Date.now() + Math.random().toString()

        await insertUsers(
            id,
            req.body.name, 
            req.body.nickname,
            req.body.email 
        )
            res.status(400).send({
                message: error.message || error.sqlMessege 
            }) 

        
        //  1 - Validadar entrada da requizição

        //  2 - Consultar o banco de dados

        //  3 - Validar saldo do banco 

        //  4 - Responder a requisição
     


    } catch (error) {
        res.status(400).send({
        message: error.message || error.sqlMessege
        })
    }
}

