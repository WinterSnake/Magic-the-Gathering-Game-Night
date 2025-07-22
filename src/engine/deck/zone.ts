// Imports
import { Card } from '../card/card.js';

// Classes
export class Zone {
	/* Constructor */
	constructor(cards: Card[]) {
		this.cards = cards;
	}
	/* Instance Methods */
	public draw(count: number = 1): Card[] {
		const cards: Card[] = [];
		for (let i = 0; i < count; ++i) {
			const card = this.cards.pop();
			cards.push(card);
		}
		return cards;
	}
	public shuffle(): void {
		for (let i = this.cards.length - 1; i > 0; --i) {
			const j = Math.floor(Math.random() * (i + 1));
			[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
		}
	}
	/* Properties */
	private cards: Card[];
}
