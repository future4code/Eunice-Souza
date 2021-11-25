"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = exports.GENDER = void 0;
var GENDER;
(function (GENDER) {
    GENDER["MALE"] = "MALE";
    GENDER["FEMALE"] = "FEMALE";
    GENDER["OTHER"] = "OTHER";
})(GENDER = exports.GENDER || (exports.GENDER = {}));
class Character {
    constructor(charName, charGender, charDescription, charId) {
        this.name = charName;
        this.gender = charGender;
        this.id = charId;
        this.description = charDescription;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
}
exports.Character = Character;
//# sourceMappingURL=Character.js.map