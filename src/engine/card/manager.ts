// Imports
import { Card, CardType, SuperType } from './card.js';
import { ManaColor } from './mana.js';

// Constants
const CARD_TABLE: { [key: string]: Card} = { };

// Functions
export async function loadCard(path: string): Promise<Card> {
	const [_type, name] = path.split('/');
	// Load Card from memory
	if (CARD_TABLE[name] !== undefined) {
		return CARD_TABLE[name];
	}
	//// Load Card from JSON
	const response = await fetch(`./data/card/${path}.json`);
	if (!response.ok) {
		throw new Error(`Card "${name}" not found`);
	}
	const data = await response.json();
	let baseType: CardType = undefined;
	let superType: SuperType = undefined;
	if (data['type']['super'] !== null) {
		superType = SuperType[data['type']['super'] as keyof typeof SuperType];
	}
	data['type']['base'].forEach(element => {
		baseType |= CardType[element as keyof typeof CardType];
	});
	const card = new Card(
		data['name'], baseType, data['type']['sub'], superType
	);
	CARD_TABLE[name] = card;
	return card;
}

export async function loadDeck(name: string): Promise<Card[]> {
	const path = `./data/deck/${name}.json`;
	const resp = await fetch(path);
	const data = await resp.json();
	let cards: Card[] = [];
	for (const [name, count] of Object.entries(data['cards'])) {
		for (let i = 0; i < (count as number); ++i) {
			const card = await loadCard(name);
			cards.push(card);
		}
	}
	return cards;
}
