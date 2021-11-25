import { app } from "./app"
import { signup } from './endpoints/signup'
import { createTask } from './endpoints/createTask'
import { getTaskById } from './endpoints/getTaskById'
import { login } from './endpoints/login'
import { connection } from "./connection"


app.post('/user/signup', signup)
app.post('/user/login', login)

app.put('/task', createTask)
app.get('/task/:id', getTaskById)

connection.raw("SWOU TABLES").then(console.log)

