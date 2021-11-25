import { Response } from "express";
// import moment from "moment"

export default async function createTask(
    req: Request,
    res: Response
) {

    try {
        // Validar as entradas da requisição.
        if(
            !req.body.title || 
            !req.body.description ||
            !req.body.deadline ||
            !req.body.authorId
        ){
            res.status(400).send({
                message: '"title", "description", "deadline" e "authorid" são obrigatórios'
            })
            return
        }

        const dateDiff: number = moment(req.body.deadline, 'DD/MM/YYYY').unix( )- moment().unix
            
            console.log(dateDiff)

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }

}

    
