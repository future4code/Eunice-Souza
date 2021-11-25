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
exports.UserDataBase = void 0;
const User_1 = require("../../classes/User");
const BaseDataBase_1 = require("../BaseDataBase");
class UserDataBase extends BaseDataBase_1.BaseDataBase {
    constructor() {
        super(...arguments);
        this.toUser = (input) => new User_1.User(input.id, input.name, input.email, input.age);
        this.createUser = (user) => BaseDataBase_1.BaseDataBase
            .connection('UserDataBase')
            .insert(user);
        this.getUserByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            const [result] = yield BaseDataBase_1.BaseDataBase
                .connection(UserDataBase.tableName)
                .where({ email });
            if (result)
                return this.toUser(result);
        });
        this.getAllUsers = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield BaseDataBase_1.BaseDataBase
                .connection(UserDataBase.tableName);
            return result.map(this.toUser);
        });
    }
}
exports.UserDataBase = UserDataBase;
UserDataBase.tableName = 'labecommerc_users';
//# sourceMappingURL=UserDataBase.js.map