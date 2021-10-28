import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log('Server rodando na porta 3003')
})

// const date = new Date('colocar a data e ano')depois que rodar no postman

// console.log(date)