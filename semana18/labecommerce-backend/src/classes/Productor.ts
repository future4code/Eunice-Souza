export class Product{

    constructor(
        readonly id: string,
        readonly name: string,
        readonly description: string,
        readonly price: number
    )  {
        
        if (typeof id !== "string") throw new Error("type of 'id' must be a 'string'")
        if (typeof name !== "string") throw new Error("type of 'id' must be a 'string'")
        if (typeof description !== "string") throw new Error("type of 'id' must be a 'string'")
        if (typeof price !== "number") throw new Error("type of 'id' must be a 'string'")
    } 
}