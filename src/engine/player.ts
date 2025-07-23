// Imports
import { Card } from './card/index.js';
import { Field } from './field.js';
import { Zone } from './deck/index.js';

// Classes
export abstract class PlayerBase {
	/* Constructor */
	constructor(deck: Card[]) {
		this.hand = [];
		this.library = new Zone(deck);
		this.field = new Field();
	}
	/* Instance Methods */
	public getHandIndices(criteria: (card: Card) => boolean): number[] {
		return this.hand.map((card, index) => {
			if (criteria(card)) {
				return index;
			}
			return undefined;
		}).filter(index => index !== undefined);
	}
	/* Properties */
	public get isAlive(): boolean {
		return this.health > 0;
	}
	hand: Card[];
	library: Zone;
	field: Field;
	health: number = 20;
}
