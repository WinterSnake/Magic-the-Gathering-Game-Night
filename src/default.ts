// Constants
const DEFAULT_DECK_NAMES: string[] = [
	"boundless_elves",
	"dark_sacrifice",
	"draconic_fury",
	"glorious_combat",
	"political_trickery",
];

// Functions
export function getRandomDecks(count: number, includeRepeat: boolean = true): string[] {
	const selection: string[] = [...DEFAULT_DECK_NAMES];
	const decks: string[] = [];
	for (let i = 0; i < count; ++i) {
		const nameIndex = Math.floor(Math.random() * selection.length);
		let deck: string;
		if (includeRepeat) {
			deck = selection[nameIndex];
		} else {
			deck = selection.splice(nameIndex, 1)[0];
		}
		decks.push(deck);
	}
	return decks;
}
