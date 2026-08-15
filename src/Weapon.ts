export class Weapon{
    name: string;
    damage: number;

    constructor(name: string, damage:number){
        this.name = name;
        this.damage = damage;
    }

    getName(): string{
        return this.name;
    }

    getDamage(): number{
        return this.damage;
    }

    setName(name: string): void{
        this.name = name;
    }

    setDamage(damage: number): void{
        this.damage = damage;
    }

    showInfo(): void{
        console.log(`
            =========================
            WEAPON
            =========================
            Weapon Name: ${this.name} 
            Damage: ${this.damage}`);
    }
}