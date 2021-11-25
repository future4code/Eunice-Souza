import {Request, Response} from 'express'
import {Users} from './types'
import { connection } from './data/connection'


export const getAllUsers = async(
  req: Request,
  res: Response
  ): Promise<any> =>{

  try {
    const title = req.query.title
    console.log(title)

      

     const users = await connection('aula49_users')
     .where('title', 'link',`%${title}%`);
     // where {chave: valor}; WHERE chave = 'valor'; WHERE title = ${title}

     if(!users.length){
        res.statusCode = 404
        throw new Error("No users found")
     }

     res.status(200).send(users)
     
  } catch (error) {
     console.log(error)
     res.send(error.message || error.sqlMessage)
  }
}