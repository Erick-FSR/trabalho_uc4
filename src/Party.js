"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Party = void 0;
class Party {
    constructor(name) {
        this.name = name;
        this.members = [];
    }
    showMembers() {
        console.log(`
            =========================
            ${this.name} 
            ========================= 
            `);
        console.log(this.members.map(member => `${member.getName()} - Level: ${member.getLevel()}`).join(`\n`));
    }
    addMember(character) {
        if (this.members.includes(character)) {
            console.log(`This Chararcter is already in the party!`);
        }
        else {
            this.members.push(character);
        }
    }
    removeMember(character) {
        const index = this.members.indexOf(character);
        if (index !== -1) {
            this.members.splice(index, 1);
        }
    }
}
exports.Party = Party;
