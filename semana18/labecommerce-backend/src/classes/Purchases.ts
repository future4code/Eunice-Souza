// cria: id user, id productor, quantity, total

export class Purchase{
    constructor(
        readonly userId: string,
        readonly productId: string,
        readonly quantity: number,
        readonly total: number
    ) {
        if (typeof userId !== "string") throw new Error("type of 'id' must be a 'string'")
        if (typeof productId !== "string") throw new Error("type of 'id' must be a 'string'")
        if (typeof quantity !== "number") throw new Error("type of 'id' must be a 'string'")
        if (typeof total !== "number") throw new Error("type of 'id' must be a 'string'")
    }
}