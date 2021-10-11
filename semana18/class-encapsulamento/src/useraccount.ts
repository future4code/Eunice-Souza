import { Transaction } from "./transactions";


export class UserAccount {
    private cpf: string ;
    private name: string ;
    private age: number ;
    private balance: number = 0;
    private transactions: Transaction[] = []
   
  
    constructor(
       cpf: string,
       name: string, 
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getCpf () {
        return this.cpf
    }

    public getName () {
        return this.name
    }

    public getAge () {
        return this.age
    }
    
}
export const gatinhaGaya= new UserAccount("12345678901","Gaya",666)
