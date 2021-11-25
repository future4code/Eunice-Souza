"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const User_1 = require("../classes/User");
const UserDataBase_1 = require("../data/users/UserDataBase");
const IdGenerator_1 = require("../services/IdGenerator");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, age } = req.body;
        const id = new IdGenerator_1.IdGenerator().execute();
        const database = new UserDataBase_1.UserDataBase;
        const newUser = new User_1.User(id, name, email, age);
        const findEmail = yield database.getUserByEmail(email);
        if (findEmail)
            throw new Error('Email already exists');
        yield database.createUser(newUser);
        res.status(201).send({ newUser });
    }
    catch (err) {
        res.status(500).send({ message: err });
    }
});
exports.createUser = createUser;
//# sourceMappingURL=createUser.js.map