// Imports
import { Card } from './card/index.js';
import { Zone } from './deck/index.js';

// Classes
export class PlayerBase {
	/* Constructor */
	constructor(deck: Card[]) {
		this.hand = [];
		this.library = new Zone(deck);
	}
	/* Properties */
	private hand: Card[];
	private library: Zone;
	health: number = 20;
}
