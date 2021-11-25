import {UserConnection} from "../../connection/users/UserConnection"
import { Request, Response } from "express"


export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const connection = new UserConnection()

    const users = await connection.getAllUsers()

    res.status(200).send(users)
  } catch (err: any) {
   res.status(500).send({err})
  }
}