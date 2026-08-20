import { Character } from "./Character";

export class Party {
    private name: string;
    private members: Character[];

   public constructor(name: string) {
        this.name = name;
        this.members = [];
    }

    public showMembers(): void{
        console.log(`
            =========================
            ${this.name} 
            ========================= 
            `);
        console.log(this.members.map(member => `${member.getName()} - Level: ${member.getLevel()}`).join(`\n`));
    }

    public addMember(character: Character): void {
        if(this.members.includes(character)){
            console.log(`This Chararcter is already in the party!`);
        }else{
            this.members.push(character);
        }
    }

    public removeMember(character: Character): void {
        const index = this.members.indexOf(character);
        if(index !== -1){
            this.members.splice(index, 1);
            console.log(`${character.getName()} has been removed from the party.`);
        } 

}



}