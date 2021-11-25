import { connection } from "./baseDatabase/connection"
import pokemons from "./pokemons.json"

const main = async () => {

  try {
    await connection.raw(`
          CREATE TABLE IF NOT EXISTS pokemons (
            id INT,
            Name VARCHAR(150),
            Pokedex_Number INT,
            Img_name VARCHAR(255),
            Generation INT,
            Evolution_Stage VARCHAR(255),
            Evolved VARCHAR(255),
            FamilyID INT,
            Cross_Gen INT,
            Type1 VARCHAR(150),
            Type2 VARCHAR(150),
            Weather1 VARCHAR(150),
            Weather2 VARCHAR(150),
            STAT_TOTAL INT,
            ATK INT,
            DEF INT,
            STA INT,
            Legendary INT,
            Aquireable INT,
            Spawns INT,
            Regional INT,
            Raidable INT,
            Hatchable INT,
            Shiny INT,
            Nest INT,
            New INT,
            NotGettable INT,
            Future_Evolve INT,
            CP40 INT,
            CP39 INT
          );
   `)

    console.log("Tabela criada!")


    await connection("pokemons").insert(pokemons)

  } catch (error) {
    console.log(error)
  } finally {
    connection.destroy()
  }
}

main()