import { UserAccount } from "./useraccount";

export class Banck {
   
    private cpf: string = "1212343";
    private name: string = "Itau";
    private age: number = 97;
    private balance: number = 0 ;
    private accounts: UserAccount [] = []

 
    constructor(cpf: string, name: string, age:number, balance: number) {
        
        // instanceCpf: string,
        // instanceName: string,
        // instanceAge: number ,
        // instanceBalance: number
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
    
    public getBalance () {
        return this.balance
    }

    // public setCpf {
    //     newCpf: String
    // }{
    //     this.name = newName
    // }
    
    

}
// export const grootItau = new Banck ("Itau",  )






// const banck: {name: string, balance: number} = {

//         // cpf: string ;
//         name:"moeda",
//         // age: number ;
//         namber: 0
//         // private transactions: Transaction[] = []


// }


//      contructor() {
//         name: "Euro",
//         balance: 10.000
//      }
// }





//   }

// public getAccount () {
//     return this.accounts
// }
