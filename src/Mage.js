"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
const Character_1 = require("./Character");
class Mage extends Character_1.Character {
    constructor(name, level, health, mana, spell) {
        super(name, level, health);
        this.mana = mana;
        this.spell = spell;
    }
    getMana() {
        return this.mana;
    }
    setMana(newMana) {
        this.mana = newMana;
    }
    castSpell() {
        if (this.mana >= this.spell.getManaCost()) {
            this.mana -= this.spell.getManaCost();
            console.log(`${this.name} casts ${this.spell.getName()}!`);
            console.log(`Damage dealt: ${this.spell.getDamage()}`);
            console.log(`Remaining mana: ${this.mana}`);
        }
        else {
            console.log(`${this.name} does not have enough mana to cast ${this.spell.getName()}!`);
        }
    }
    showInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Level: ${this.level}`);
        console.log(`Health: ${this.health}`);
        console.log(`Mana: ${this.mana}`);
        console.log(`Spell: ${this.spell.getName()} (Damage: ${this.spell.getDamage()}, Mana Cost: ${this.spell.getManaCost()})`);
    }
}
exports.Mage = Mage;
