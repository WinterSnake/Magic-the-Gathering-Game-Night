// Imports
import { Card, CardType, SuperType } from './card.js';
import { ManaColor } from './mana.js';

// Constants

// Functions
export async function loadCard(path: string): Promise<Card> {
	path = `./data/card/${path}`;
	const resp = await fetch(path);
	const data = await resp.json();
	let baseType: CardType = undefined;
	let superType: SuperType = null;
	if (data['type']['super'] !== null) {
		superType = SuperType[data['type']['super'] as keyof typeof SuperType];
	}
	data['type']['base'].forEach(element => {
		baseType |= CardType[element as keyof typeof CardType];
	});
	return new Card(
		data['name'], baseType, data['type']['sub'], superType
	);
}
