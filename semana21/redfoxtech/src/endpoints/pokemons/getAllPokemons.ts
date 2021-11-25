import { Request, Response } from "express"
import { Connection } from "../../data/baseDatabase/connection"


export const getAllPokemons = async (req: Request, res: Response) => {
    try {
        const connection = new PokemomConnection()

        const result = await connection.getAllPokemons()

        res.status(200).send({result})
    } catch (err: any) {
        res.status(500).send({err})
    }


}