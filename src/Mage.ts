import { Character } from "./Character";
import { Spell } from "./Spell";

export class Mage extends Character {
    private mana: number;
    private spell: Spell;

    constructor(name: string, level: number, health: number, mana: number, spell: Spell){
        super(name, level, health);
        this.mana = mana;
        this.spell = spell;
    }
    
    getMana(): number{
        return this.mana;
    }

    setMana(newMana: number): void{
        this.mana = newMana;
    }

    castSpell(): void{
        if(this.mana >= this.spell.manaCost){
            this.mana -= this.spell.manaCost;
            console.log(`${this.name} casts ${this.spell.getName()}!`);
            console.log(`Damage dealt: ${this.spell.getDamage()}`);
            console.log(`Remaining mana: ${this.mana}`);
        } else{
            console.log(`${this.name} does not have enough mana to cast ${this.spell.getName()}!`);
        }

    }

    showInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Level: ${this.level}`);
        console.log(`Health: ${this.health}`);
        console.log(`Mana: ${this.mana}`);
        console.log(`Spell: ${this.spell.getName()} (Damage: ${this.spell.getDamage()}, Mana Cost: ${this.spell.manaCost})`);
    }

}
