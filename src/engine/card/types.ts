// Constants
export enum BaseType {
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
