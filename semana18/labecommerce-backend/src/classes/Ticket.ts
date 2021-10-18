import { Product } from "./Productor";

export class Ticket extends Product{
    constructor(
        id: string,
        name: string,
        description: string,
        price: number,
        readonly origin: string,
        readonly destination: string
    ) {
        super(id, name, description, price)

        
        if (typeof origin !== "string") throw new Error("type of 'id' must be a 'string'")
        if (typeof description !== "string") throw new Error("type of 'id' must be a 'string'")
    }
}