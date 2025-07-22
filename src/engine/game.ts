// Imports
import { PlayerBase } from './player.js';

// Classes
export class Game {
	/* Constructor */
	constructor(...players: PlayerBase[]) {
		this.players = players;
	}
	/* Properties */
	private players: PlayerBase[];
	private currentPlayer: number = 0;
}
