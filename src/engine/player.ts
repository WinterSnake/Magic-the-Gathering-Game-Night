// Imports
import { Card } from './card/index.js';
import { Zone } from './deck/index.js';

// Constants
const HAND_SIZE: number = 7;

// Classes
export abstract class PlayerBase {
	/* Constructor */
	constructor(deck: Card[]) {
		this.hand = [];
		this.library = new Zone(deck);
		this.graveyard = new Zone([]);
		this.exile = new Zone([]);
	}
	/* Properties */
	hand: Card[];
	library: Zone;
	graveyard: Zone;
	exile: Zone;
	health: number = 20;
}
