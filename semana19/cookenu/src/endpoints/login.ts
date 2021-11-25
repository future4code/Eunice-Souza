import { decodeBase64 } from "bcryptjs";
import { Request, Response } from "express"
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/hashManager";
import { IdGenerator } from "../services/IdGenerator";



export async function login(req: Request, res: Response) {

    try {

        const { email, password } = req.body

        if (!email || !password) {
            res.status(422).send(
                "Insira corretamete seu dados 'name', 'email', password e 'role'"
            )
        }
        const userDataBase = new UserDataBase()
        const user = await userDataBase.findUserByEmail(email)

        if (user) {
            res.status(409).send('Esse email não está cadastrado!')
        }

        const id = new IdGenerator().generateId()

        const hashManager = new HashManager()
        const passwordIdsCorrect = hashManager.compare(password, user.getPassword())


        const authenticator = new Authenticator()
        const token = authenticator.generate({ id: user.getId(), role: user.getRole() })

        res.status(200).send({ menssage: 'Usuário logado com sucesso', token })

    } catch (error) {
        res.status(400).send(error.message)
    }

}