"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterDatabase_1 = require("../database/CharacterDatabase");
const Character_1 = require("../entities/Character");
function getAllCharacters(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const characterDatabase = new CharacterDatabase_1.CharacterDatabase();
            const charactersDb = yield characterDatabase.getAll();
            const characters = charactersDb.map(character => {
                return new Character_1.Character(character.name, character.gender, character.description, character.id);
            });
            res.send(characters);
        }
        catch (error) {
            res.status(500).send("Unexpected server error");
        }
    });
}
exports.default = getAllCharacters;
//# sourceMappingURL=getAllCharacters.js.map