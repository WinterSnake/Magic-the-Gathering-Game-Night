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
		// Randomize player array
		for (let i = this.players.length - 1; i > 0; --i) {
			const j = Math.floor(Math.random() * (i + 1));
			[this.players[i], this.players[j]] = [this.players[j], this.players[i]];
		}
		// Initialize players
		this.players.forEach(player => {
			player.library.shuffle();
			player.hand = player.library.cards.splice(0, 7);
			console.log(player.hand);
		});
	}
	public step(): void {
		this.turnPhase = phaseStateTable[this.turnPhase];
	}
	/* Properties */
	public get currentPlayer(): PlayerBase {
		return this.players[this.playerIndex];
	}
	public get playerCount(): number {
		return this.players.length;
	}
	private players: PlayerBase[];
	private playerIndex: number = 0;
	private turnCounter: number = 0;
	turnPhase: PhaseStep = PhaseStep.Untap;
}
