// Imports
import { loadDeck } from './engine/deck/index.js';
import { GameSystem } from './engine/game.js';
import { AIPlayer } from './players/index.js';
import { getRandomDecks } from './default.js';


// Body
const players = await Promise.all(
	getRandomDecks(2, false).map(name => loadDeck(name))
).then(decks => decks.map(deck => new AIPlayer(deck)));
