// Imports
import { Card, loadCard } from '../card/index.js';

// Functions
export async function loadDeck(name: string): Promise<Card[]> {
	const response = await fetch(`/data/deck/${name}.json`);
	if (!response.ok) {
		throw new Error(`Unable to find deck "${name}"`);
	}
	const data = await response.json();
	let cards: Card[] = [];
	for (const [name, count] of Object.entries(data['cards'])) {
		for (let i = 0; i < (count as number); ++i) {
			const card = await loadCard(name);
			cards.push(card);
		}
	}
	return cards;
}
