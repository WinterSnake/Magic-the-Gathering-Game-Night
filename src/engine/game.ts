// Imports
import { PlayerBase } from './player.js';
import { PhaseStep, phaseStateTable } from './phase.js';

// Classes
export class GameSystem {
	/* Constructor */
	constructor(...players: PlayerBase[]) {
		this.players = players;
	}
	/* Instance Methods */
	public init(): void {
		this.currentPlayer = Math.round(Math.random() * (this.playerCount - 1));
		this.players.forEach(player => {
			player.onGameInit(this);
			console.log(player);
		});
	}
	/* Properties */
	public get playerCount(): number { return this.players.length; }
	private players: PlayerBase[];
	private currentPlayer: number;
}
