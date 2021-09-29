

export type Transection ={
    value: number,
    date: Date,
    description: string
}

export type Account ={
    name:string,
    CPF: string,
    dateOfBirth: Date,
    balance: number,
    statement: Array<Transection>
}

export const account: Account [] = []