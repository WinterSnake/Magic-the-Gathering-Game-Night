// Imports
import { Card, CardType, SuperType } from './card/card.js';
import { ManaColor } from './card/mana.js';

// Constants
const DIRECTORIES: string[] = [
	"artifact",
	"creature",
	"enchantment",
	"instant",
	"land",
	"sorcery"
];
const CARD_TABLE: { [key: string]: Card} = { };

// Functions
export async function loadCard(name: string): Promise<Card> {
	// Load Card from memory
	if (CARD_TABLE[name] !== undefined) {
		return CARD_TABLE[name];
	}
	// Load Card from JSON
	let cardData = null;
	const path = `./data/card/`;
	for (const dir of DIRECTORIES) {
		const fullPath = `${path}${dir}/${name}.json`;
		const resp = await fetch(fullPath);
		if (!resp.ok) continue;
		cardData = await resp.json();
		break;
	}
	if (cardData === null) {
		throw new Error(`No card "${name}" found`);
	}
	let baseType: CardType = undefined;
	let superType: SuperType = null;
	if (cardData['type']['super'] !== null) {
		superType = SuperType[cardData['type']['super'] as keyof typeof SuperType];
	}
	cardData['type']['base'].forEach(element => {
		baseType |= CardType[element as keyof typeof CardType];
	});
	const card = new Card(
		cardData['name'], baseType, cardData['type']['sub'], superType
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
