import { app } from "./app"
import { signupController } from "./controller/signupController";
import {loginController} from "./controller/loginController",


app.post('/user/signup', signupController)
app.post('/user/login', loginController)