import { Character } from './Character';
import { Weapon } from './Weapon';

export class Warrior extends Character {
    private strength: number;
    private weapon: Weapon;

    constructor(name: string, level: number, health: number, strength: number, weapon: Weapon) {
        super(name, level, health);
        this.strength = strength;
        this.weapon = weapon;
    }

    attack(): void {
        const damage = this.strength + this.weapon.getDamage();
        console.log(`${this.name} attacks with ${this.weapon.getName()}`);
        console.log(`Damage dealt: ${damage}`);
    }

    showInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Level: ${this.level}`);
        console.log(`Health: ${this.health}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Weapon: ${this.weapon.getName()} (Damage: ${this.weapon.getDamage()})`);
    }
}