import * as bcrypt from 'bcrypt'
// import {hashSync, compareSync, genSaltSync} from "bcryptjs"


export class HashManager {
  public async hash(text: string): Promise<string> {
    const rounds = 12;
    const salt = await bcrypt.genSalt(rounds);
  
    return bcrypt.hash(text, salt);
  }

  public async compare(text: string, hash: string ): Promise<boolean> {
    return bcrypt.compare(text, hash)
  }

}
