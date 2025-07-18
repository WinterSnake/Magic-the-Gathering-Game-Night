// Constants
export enum CardType {
	Artifact    = 1 << 0,
	Creature    = 1 << 1,
	Enchantment = 1 << 2,
	Instant     = 1 << 3,
	Land        = 1 << 4,
	Sorcery     = 1 << 5,
}

export enum SuperType {
	Basic,
	Legendary,
}

// Classes
export class Card {
	// Constructor
	constructor(name: string, type: CardType, subtypes: string[], supertype: SuperType | null = null) {
		this.name = name;
		this.type = type;
		this.supertype = supertype;
		this.subtypes = subtypes;
	}
	// Instance Methods
	// Properties
	name: string;
	supertype: SuperType | null;
	type: CardType;
	subtypes: string[];
}
