import { Request, Response } from "express"
import updateUsers from "./updteUsers"


export default async function editUsers(
    req: Request,
    res: Response
) {
    try {

        if (
            // validar as entradas da requizição.
            req.body.name === '' ||
            req.body.email === '' ||
            req.body.email === ''
        ) {
            res.status(400).send({
                massage: 'Nem um campo pode estar em branco'
            })

            return
        }

        if (!req.body.name && !req.body.nickname && !req.body.email){
            res.status(400).send({
                massage: 'Escolha ao mmenos um valor para a alterar'
           })

           return
        }

        await updateUsers(
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        res.status(404).send({
            message: 'Usuário atualizado!'
        })


    }  catch (error) {
        res.status(400).send({
           message: error.message || error.sqlMessage 
        })
    }
    
}


