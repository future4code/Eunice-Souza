// import connection from "../connection"
import { Character } from "../entities/Character"

export class CharacterDatabase {
  private connection: any

  async create(character: Character) {
    await this.connection("character")
         .insert(character)
  }
  
  async getAll() {
    return this.connection("character").select()
  }
}
