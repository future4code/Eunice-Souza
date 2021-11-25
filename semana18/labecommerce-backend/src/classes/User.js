"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
        if (typeof id !== "string")
            throw new Error("type of 'id' must be a 'string'");
        if (typeof name !== "string")
            throw new Error("type of 'id' must be a 'string'");
        if (typeof email !== "string")
            throw new Error("type of 'id' must be a 'string'");
        if (typeof age !== "number")
            throw new Error("type of 'id' must be a 'number'");
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map