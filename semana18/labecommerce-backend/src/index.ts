import chalk from "chalk"
import {app} from "./app"
import {createUser} from "./endpoints/createUser"
import { getAllProducts } from "./endpoints/getAllProducts"
import { getAllUsers } from "./endpoints/getAllUsers"
import { createProduct } from "./endpoints/products/createProduct"



let message = require ("chalk")

const menssage = chalk.blue("Hello, word")
console.log(message)

app.get('/users', getAllUsers)
app.post('/users', createUser)

app.get('./products', getAllProducts)
app.post('./procuts', createProduct)
