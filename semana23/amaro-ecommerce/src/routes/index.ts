import { UserController } from "../controllers/UserController"
import { Router } from "express"
// const {Router} = require("express")

// const UserController = require(../../controllers/UserController)

const routes = Router()

// routes.get("/", (req: Request, res:Response) =>{
//     res.send()
// })

routes.post("/users")
routes.get("/users",  UserController)

routes.get("/users/:users_id")
routes.post("/login")

routes.post("/products/:users_id")
routes.get("/products/:user_id" )
routes.patch("/products/:user_id/product_id")
routes.delete("/products/:user_id/:product_id")

routes.get("/products")
routes.get("/products/:product_id")

routes.post("/cart/:user_id")
routes.get("/cart/:user_id")

routes.get("/cart/:user_id/:cart_id")


export {routes} 




    

  


