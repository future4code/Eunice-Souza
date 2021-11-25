import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { UserDataBase } from "../data/UserDataBase";


export async function getAllCharacters(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;

        if (!token) {
            res
                .status(422)
                .send("Esse endpoent exige uma autorização a ser passada nos headers.")
        }

        const authentictor = new Authenticator
        const tokenData = authentictor.getTokenData(token)

        if (tokenData.role !== 'ADMIN') {
            res.status(401).send('Somente administradores podem acessar essa funcionalidade.')
        }

        const userDataBase = new UserDataBase()
        const users = await userDataBase.getAllUsers()


        res.status(200).send(users)
    } catch (error) {
        res.status(400).send(error.massage)
    }
}
