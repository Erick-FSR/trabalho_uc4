"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    constructor(name, level, health) {
        this.name = name;
        this.level = level;
        this.health = health;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    getLevel() {
        return this.level;
    }
    setLevel(newLevel) {
        this.level = newLevel;
    }
    getHealth() {
        return this.health;
    }
    setHealth(newHealth) {
        this.health = newHealth;
    }
    takeDamage(amount) {
        if (this.health <= 0) {
            console.log(`O personagem não pode morrer!`);
        }
        else {
            this.health -= amount;
            console.log(`${this.name} took ${amount} damage!`);
            console.log(`Health remaining: ${this.health}`);
        }
    }
    showInfo() {
        console.log(`
            ==================
            INFO CHARACTER
            ==================
            Name: ${this.name}
            Level: ${this.level}
            Health: ${this.health}`);
    }
}
exports.Character = Character;
