import { compareSync, genSaltSync, hashSync } from "bcryptjs"

export class HashManager {

  public generateHash = (plainText: string): string => {
    const cost = 12
    const salt = genSaltSync(cost)
    const cipherText = hashSync(plainText, salt)

    return cipherText
  }

  public compareHash = (
    plainText: string,
    cipherText: string
  ) => {
    const result = compareSync(plainText, cipherText)

    return result
  }
}

// *b. Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por **criptografar** uma string usando o bcryptjs.  ***** 

// *c. Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs*

//     b, c.


import * as bcrypt from "bcryptjs";

const hash = async (s: string): Promise<string> => {
  const rounds = Number(process.env.BCRYPT_COST);
  const salt = await bcrypt.genSalt(rounds);
  const result = await bcrypt.hash(s, salt);
  return result;
}

const compare = async (s: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(s, hash);
}

export class HasManager {
  public generateHash = (demolidor: string) => {
    
  }
}


