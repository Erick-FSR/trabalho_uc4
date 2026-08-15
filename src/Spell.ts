export class Spell {
    name: string;
    damage: number;
    manaCost: number;

    constructor(name: string, damage: number, manaCost: number) {
        this.name = name;
        this.damage = damage;
        this.manaCost = manaCost;
    }

    getName(): string {
        return this.name;
    }

    getDamage(): number {
        return this.damage;
    }

    setName(name: string): void {
        this.name = name;
    }

    setDamage(damage: number): void {
        this.damage = damage;
    }

    setManaCost(manaCost: number): void {
        this.manaCost = manaCost;
    }

    showInfo(): void {
        console.log(`
            =========================
            SPELL
            =========================
            Spell Name: ${this.name} 
            Damage: ${this.damage}
            Mana Cost: ${this.manaCost}`);
    }
}