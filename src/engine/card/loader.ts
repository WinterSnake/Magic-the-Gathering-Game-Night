// Imports
import { Card } from './card.js';
import { ManaColor } from './mana.js';
import { BaseType, SuperType } from './types.js';

// Constants
const CARD_TABLE: {[key: string]: Card} = {};

// Functions
export async function loadCard(path: string): Promise<Card> {
	const [base, name] = path.split('/');
	// Load Card from table
	if (CARD_TABLE[name] !== undefined) {
		return CARD_TABLE[name];
	}
	// Load Card from json
	const response = await fetch(`/data/card/${path}.json`);
	if (!response.ok) {
		throw new Error(`Invalid card "${path}"`);
	}
	const data = await response.json();
	let superType: SuperType = null;
	if (data['type']['super'] !== null) {
		superType = SuperType[data['type']['super'] as keyof typeof SuperType];
	}
	let baseType: BaseType = null;
	data['type']['base'].forEach(element => {
		baseType |= BaseType[element as keyof typeof BaseType];
	});
	const card = new Card(
		data['name'], superType, baseType, data['type']['sub']
	);
	CARD_TABLE[name] = card;
	return card;
}
