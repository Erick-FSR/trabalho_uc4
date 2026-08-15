import { Character } from "./Character";

export class Party {
    private name: string;
    private members: Character[];

    constructor(name: string) {
        this.name = name;
        this.members = [];
    }

    showMembers(): void{
        console.log(`
            =========================
            ${this.name}
            ========================= 
            `);
        console.log(`${this.members.map(member => member.getName()).join('\n')}`);
    }

    addMember(character: Character): void {
        this.members.push(character);
    }

    removeMember(character: Character): void {
        const index = this.members.indexOf(character); 

}



}