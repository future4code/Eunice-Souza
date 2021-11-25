import {app} from "./app";
import { BaseDataBase } from "./data/BaseDataBase";
import { getAllCharacters } from "./endpoints/getAllCharacters";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";
import generateId from "./services/IdGenerator";


app.get("/user", getAllCharacters);
app.post('/user', signup);
app.post("/user/login", login)

console.log(
    generateId()
);