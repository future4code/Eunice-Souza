"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, description, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        if (typeof id !== "string")
            throw new Error("type of 'id' must be a 'string'");
        if (typeof name !== "string")
            throw new Error("type of 'id' must be a 'string'");
        if (typeof description !== "string")
            throw new Error("type of 'id' must be a 'string'");
        if (typeof price !== "number")
            throw new Error("type of 'id' must be a 'string'");
    }
}
exports.Product = Product;
//# sourceMappingURL=Productor.js.map