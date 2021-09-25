import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { account } from './types'
// import { Accounts } from './accounts'

const app: Express = express()

app.use(express.json())
app.use(cors())

app.post('./users/create', (req: Request, res: Response) => {
    try {
        //  desestruturando
        const { name, CPF, dateOfBirthsString } = req.body

        // desetruturando
        const [day, nonth, year] = dateOfBirthsString.split('./')

        // transformar em array [05, 11, 2020]
        const dateOfBirth: Date = new Date(`${year}=${nonth}=${day}`)

        // validar as entradas de requisição
        const ageIrMillisSeconds: number = Date.now()- dateOfBirth.getTime()

        const ageInTears: number = ageIrMillisSeconds /1000 /60 /60 /24 /365

        if(ageInTears < 18) {
            res.statusCode = 407
            throw new Error ('Idade deve ser maior que 18')
        }

        // consultar ou alterar a base de dados
        // criando uma nova conta
        account.push({
            // data tem que receber, dia, e ano. 
            name,
            CPF,
            dateOfBirth,
            // com a desestruturação, não precisa impregar o valor no date.
            balance: 0,
            statement: []
        })

        // validar os resultados da consulta
        // enviar a resposta
        res.status(201).send('Conta criada com sucesso')
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }

})

// como não queremos pegar um usuario especifico, por isso não vai ter params e não precisa validar.
app.get("/users/all", (req: Request, res: Response) => {
    try {
        if(account.length) {
          res.statusCode = 404
          throw new Error('Conta não encontrada')  
        }
        res.status(200).send(account)
    } catch (error) {
        res.send(error)
    }

})



app.listen(3003, () => {
    console.log('sevidor rodando na porta 3003')
})

