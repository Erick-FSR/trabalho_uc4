export class Character{
    protected name: string;
    protected level: number;
    protected health: number;

    constructor(name: string, level: number, health: number){
        this.name = name;
        this.level = level;
        this.health = health;
    }

    getName(): string{
        return this.name;

    }

    setName(newName: string): void{
        this.name = newName;
    }

    getLevel(): number{
        return this.level;

    }

    setLevel(newLevel: number): void{
        this.level = newLevel;
    }

    getHealth(): number{
        return this.health;
    }

    setHealth(newHealth: number): void{
        this.health = newHealth;

    }

    takeDamage(amount: number): void{
        if(this.health <= 0){
            console.log(`O personagem não pode morrer!`);
        } else{
            this.health -= amount;
            console.log(`${this.name} took ${amount} damage!`);
            console.log(`Health remaining: ${this.health}`);

        }
        
    }

    showInfo(): void{
        console.log(`
            ==================
            INFO CHARACTER
            ==================
            Name: ${this.name}
            Level: ${this.level}
            Health: ${this.health}`)

    }
}