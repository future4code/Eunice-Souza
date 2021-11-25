export class User {
    constructor(
        readonly id: string,
        readonly name: string
    ) {

        if (typeof id !== "string") throw new Error("type of 'id' must be a 'string'")
        if (typeof name !== "string") throw new Error("type of 'id' must be a 'string'")
    }
}