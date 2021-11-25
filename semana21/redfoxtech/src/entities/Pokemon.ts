export class Pokemon {
    construtor(
        id: string,
        name: string,
        description: string
    ) {
        if (typeof id !== "string") throw new Error("type of 'id' must be a 'string'")
        if (typeof name !== "string") throw new Error("type of 'name' must be a 'string'")
        if (typeof description !== "string") throw new Error("type of 'description' must be a 'string'")
    }

}