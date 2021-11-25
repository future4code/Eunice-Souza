"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
const Productor_1 = require("./Productor");
class Ticket extends Productor_1.Product {
    constructor(id, name, description, price, origin, destination) {
        super(id, name, description, price);
        this.origin = origin;
        this.destination = destination;
        if (typeof origin !== "string")
            throw new Error("type of 'id' must be a 'string'");
        if (typeof description !== "string")
            throw new Error("type of 'id' must be a 'string'");
    }
}
exports.Ticket = Ticket;
//# sourceMappingURL=Ticket.js.map