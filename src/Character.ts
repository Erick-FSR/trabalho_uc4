export class Character{
    protected name: string;
    protected level: number;
    protected health: number;

   public constructor(name: string, level: number, health: number){
        this.name = name;
        this.level = level;
        this.health = health;
    }

    public getName(): string{
        return this.name;

    }

    public setName(newName: string): void{
        this.name = newName;
    }

    public getLevel(): number{
        return this.level;

    }

    public setLevel(newLevel: number): void{
        this.level = newLevel;
    }

    public getHealth(): number{
        return this.health;
    }

    public setHealth(newHealth: number): void{
        this.health = newHealth;

    }

    public takeDamage(amount: number): void{
        if(this.health <= 0){
            console.log(`O personagem não pode morrer!`);
        } else{
            this.health -= amount;
            console.log(`${this.name} took ${amount} damage!`);
            console.log(`Health remaining: ${this.health}`);

        }
        
    }

    public showInfo(): void{
        console.log(`
            ==================
            INFO CHARACTER
            ==================
            Name: ${this.name}
            Level: ${this.level}
            Health: ${this.health}`)

    }
}