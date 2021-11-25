
import { Request, Response } from "express";
import selectUsersByld from "./selectUsersByld";

export default async function getUsersByld(
    req: Request,
    res: Response
) {
    try {
        //  2 - Consultar o banco de dados
        const users = await selectUsersByld(req.params.id)

        //  3 - Validar saldo do banco 
        if (!users) {
            res.status(404).send({
                message: 'Usuario não encontrado'
            })

            return
        }

        //  4 - Responder a requisição
        res.status(200).send{(
            message:'Sucesso!',
            id: users.id,
            nickname:users.nickname
        )}


    } catch (error) {
        res.status(400).send({
        message: error.message || error.sqlMessege
        })
    }
}

