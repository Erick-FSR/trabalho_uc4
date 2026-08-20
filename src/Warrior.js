"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
const Character_1 = require("./Character");
class Warrior extends Character_1.Character {
    constructor(name, level, health, strength, weapon) {
        super(name, level, health);
        this.strength = strength;
        this.weapon = weapon;
    }
    attack() {
        const damage = this.strength + this.weapon.getDamage();
        console.log(`${this.name} attacks with ${this.weapon.getName()}`);
        console.log(`Damage dealt: ${damage}`);
    }
    showInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Level: ${this.level}`);
        console.log(`Health: ${this.health}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Weapon: ${this.weapon.getName()} (Damage: ${this.weapon.getDamage()})`);
    }
}
exports.Warrior = Warrior;
