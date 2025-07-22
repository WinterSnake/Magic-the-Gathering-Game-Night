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
	public get isAlive(): boolean {
		return this.health > 0;
	}
	hand: Card[];
	library: Zone;
	health: number = 20;
}
