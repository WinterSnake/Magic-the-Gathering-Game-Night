// Imports
import { Card } from './card/index.js';
import { Field } from './field.js';
import { Zone } from './deck/index.js';
import { GameSystem } from './game.js';

// Constants
const HAND_SIZE: number = 7;

// Classes
export abstract class PlayerBase {
	/* Constructor */
	constructor(deck: Card[]) {
		this.hand = [];
		this.library = new Zone(deck);
		this.field = new Field();
	}
	/* Instance Methods */
	public onGameInit(system: GameSystem): void {
		this.library.shuffle();
		this.hand = this.library.draw(HAND_SIZE);
	}
	/* Properties */
	public get isAlive(): boolean {
		return this.health > 0;
	}
	hand: Card[];
	private library: Zone;
	private field: Field;
	private health: number = 20;
	protected isReady: boolean = false;
}
