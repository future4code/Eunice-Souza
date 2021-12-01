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
function createCharacter(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, gender, description } = req.body;
            const character = new Character_1.Character(name, gender, description);
            const characterDatabase = new CharacterDatabase_1.CharacterDatabase();
            yield characterDatabase.create(character);
            res.status(201).end();
        }
        catch (error) {
            res.status(500).end();
        }
    });
}
exports.default = createCharacter;
//# sourceMappingURL=createCharacter.js.map