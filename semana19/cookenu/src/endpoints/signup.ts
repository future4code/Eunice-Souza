import { decodeBase64 } from "bcryptjs";
import { Request, Response } from "express"
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/hashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function signup(req: Request, res: Response) {

    try {

        const { name, email, password, role } = req.body

        if (!name || !email || !password || !role) {
            res.status(422).send(
                "Insira corretamete seu dados 'name', 'email', password e 'role'"
            );
        }
        const userDataBase = new UserDataBase()
        const user = await userDataBase.findUserByEmail(email)

        if (user) {
            res.status(409).send('Esse email já está cadastrado!');
        }
        const id = new IdGenerator().generateId()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password);

        const newUser = new User(id, name, email, hashPassword, role);
        await userDataBase.createUser(newUser);

        const authenticator = new Authenticator()
        const token = authenticator.generate({ id, role })

        res.status(200).send({menssage:'Usuário criado com sucesso', token})

    } catch (error) {
        res.status(400).send(error.message);
    }

}