import express from 'express'
import knex from 'knex'
import dotenv from 'dotenv'
import createUsers from './endpoints/createUsers'
import getUsersByld from './endpoints/getUsersByld'

dotenv.config()

const connection = knex({
    client: 'mysql',
    connection:{
        host: process.env.DB_Host,
        user: process.env.DB_USERS,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_Name,
        port: 3303
    }  
s
})

const app = express()
app.use(express.json())

app.put('/users', createUsers)
app.get('/user/:id',getUsersByld)
app.post('/user/edit/:id', editUser)

app.listen(3003, ()=>{
    console.log('Servidor rodando na porta 3003')
})

console.log('Hellow')



