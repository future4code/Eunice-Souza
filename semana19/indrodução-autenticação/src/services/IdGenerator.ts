import { v4 } from "uuid"

export class IdGenerator {
  // constructor(){}
  generateId = (): string => v4()
}

// ### 1 exercício ###

// a. Qual a sua opinião em relação a usar strings para representar os ids?
//  Você concorda que seja melhor do que usar números?

//Resposta: O valor deste atributo é uma string opaca: 
// isso significa que os desenvolvedores não devem utilizá-lo para transmitir nenhuma informação

// ### 2 execício ###

export function generateId(): string {
  return v4();
}