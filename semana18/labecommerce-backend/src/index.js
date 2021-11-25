"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const app_1 = require("./app");
const createUser_1 = require("./endpoints/createUser");
const getAllProducts_1 = require("./endpoints/getAllProducts");
const getAllUsers_1 = require("./endpoints/getAllUsers");
const createProduct_1 = require("./endpoints/products/createProduct");
let message = require("chalk");
const menssage = chalk_1.default.blue("Hello, word");
console.log(message);
app_1.app.get('/users', getAllUsers_1.getAllUsers);
app_1.app.post('/users', createUser_1.createUser);
app_1.app.get('./products', getAllProducts_1.getAllProducts);
app_1.app.post('./procuts', createProduct_1.createProduct);
//# sourceMappingURL=index.js.map