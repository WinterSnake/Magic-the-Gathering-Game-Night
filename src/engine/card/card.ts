// Imports
import { BaseType, SuperType } from './types.js';

// Classes
export class Card {
	constructor(name: string, superType: SuperType, baseType: BaseType, subTypes: string[]) {
		this.name = name;
		this.superType = superType;
		this.baseType = baseType;
		this.subTypes = subTypes;
	}
	/* Properties */
	readonly name: string;
	readonly superType: SuperType;
	readonly baseType: BaseType;
	readonly subTypes: string[];
}
