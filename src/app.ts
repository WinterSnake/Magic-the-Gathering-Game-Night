// Imports
import { loadDeck } from './engine/deck/index.js';
import { GameSystem } from './engine/game.js';
import { BaseType } from './engine/card/index.js';
import { PhaseStep, phaseStateTable } from './engine/phase.js';
import { AIPlayer } from './players/index.js';

// Body
const players = await Promise.all([
	loadDeck("boundless_elves"),
	loadDeck("dark_sacrifice"),
	loadDeck("draconic_fury"),
	loadDeck("glorious_combat"),
	loadDeck("political_trickery"),
]).then(decks => {
	return decks.map((deck) => new AIPlayer(deck));
});
const game = new GameSystem(...players);
game.init();
console.log(game);
