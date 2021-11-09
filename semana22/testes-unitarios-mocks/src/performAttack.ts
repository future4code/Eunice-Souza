import { Character } from "./validateCharacter";

export default function performAttack (attacker: Character, defender: Character, validator:(input: Character) => boolean) {
    if(validator(attacker)=== undefined ||  validator(defender) === undefined) throw new Error(`Invalid Character`)
    if(attacker.strength > defender.defense)
    return defender.life = defender.life - (attacker.strength - defender.defense)
}

