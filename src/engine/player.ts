// Imports
import { Card } from './card/card.js';
import { Zone } from './zone.js';

// Classes
export class PlayerBase {
	/* Constructor */
	constructor(deck: Card[]) {
		this.library = new Zone(deck);
		this.graveyard = new Zone([]);
		this.exile = new Zone([]);
	}
	/* Properties */
	hand: Card[];
	private library: Zone;
	private graveyard: Zone;
	private exile: Zone;
	public get health() { return this._health; }
	private _health: number = 20;
}
