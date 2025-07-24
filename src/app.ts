// Imports
import { Card } from './engine/card/index.js';
import { loadDeck } from './engine/deck/index.js';
import { GameSystem, PhaseStep } from './engine/index.js';
import { AIPlayer } from './players/index.js';
import { getRandomDecks } from './default.js';

// Functions
function loadRandomDecks(count: number, includeRepeat: boolean = true): Promise<Card[]>[] {
	return getRandomDecks(count, includeRepeat).map(name => loadDeck(name));
}

// Body
const players = await Promise.all(loadRandomDecks(2, false)).then(decks =>	decks.map(deck => new AIPlayer(deck)));
const game = new GameSystem(...players);
game.init();
console.log(PhaseStep[game.turnPhase]);
game.step();
console.log(PhaseStep[game.turnPhase]);
game.step();
console.log(PhaseStep[game.turnPhase]);
game.step();
console.log(PhaseStep[game.turnPhase]);
