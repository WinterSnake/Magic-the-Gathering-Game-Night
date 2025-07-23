// Imports
import { loadDeck } from './engine/deck/index.js';
import { BaseType } from './engine/card/index.js';
import { PlayerBase } from './engine/index.js';
import { PhaseStep, phaseStateTable } from './engine/phase.js';

// Body
const [d0, d1] = await Promise.all([
	loadDeck("dark_sacrifice"),
	loadDeck("draconic_fury")
]);
const players = [new PlayerBase(d0), new PlayerBase(d1)];
console.log(players);
let currentPlayer = 0;
/// [GAME]
// Init
let phase = PhaseStep.Untap;
players.forEach(player => {
	player.library.shuffle();
	player.hand = player.library.draw(7);
});
let activePlayer = players[currentPlayer];
phase = PhaseStep.PreMain;
console.log(activePlayer.hand);
const landCards = activePlayer.getHandIndices(card => (card.baseType & BaseType.Land) === BaseType.Land);
console.log(landCards);
console.log(activePlayer.hand);
