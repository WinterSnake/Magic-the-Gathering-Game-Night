// Imports
import { loadDeck } from './engine/deck/index.js';
import { PlayerBase } from './engine/index.js';

// Body
const [d0, d1] = await Promise.all([loadDeck("boundless_elves"), loadDeck("draconic_fury")]);
const players = [new PlayerBase(d0), new PlayerBase(d1)];
let currentPlayer = 0;
players.forEach(player => {
	player.library.shuffle();
	player.hand = player.library.draw(7);
	console.log(player.hand);
});
