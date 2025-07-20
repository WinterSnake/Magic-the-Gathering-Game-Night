// Imports
import { Card } from './card/card.js';

// Classes
export class Zone {
	/* Constructor */
	constructor(cards: Card[]) {
		this.cards = cards;
	}
	/* Instance Methods */
	public shuffle() {
		for (let i = this.cards.length - 1; i > 0; --i) {
			const j = Math.floor(Math.random() * (i + 1));
			[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
		}
	}
	/* Properties */
	private cards: Card[];
}
