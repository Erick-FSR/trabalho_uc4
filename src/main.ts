import { Warrior } from "./Warrior";
import { Mage } from "./Mage";
import { Weapon } from "./Weapon";
import { Spell } from "./Spell";
import { Party } from "./Party";

const weapon1 = new Weapon("Longsword", 120);
const weapon2 = new Weapon("Spear", 100);

const spell1 = new Spell("Relive", 0, 100);
const spell2 = new Spell("Fire Ball", 50, 20);

const mage1 = new Mage("Gandalf", 50, 95, 300, spell2);
const mage2 = new Mage("Clóvis", 10, 80, 200, spell1);

const warrior1 = new Warrior("Jon Snow", 10, 200, 150, weapon1);
const warrior2 = new Warrior("Grey Worm", 20, 230, 120, weapon2);

const party1 = new Party("Os espanta priquito");

party1.addMember(warrior1);
party1.addMember(warrior2);
party1.addMember(mage1);
party1.addMember(mage2);

party1.showMembers();
