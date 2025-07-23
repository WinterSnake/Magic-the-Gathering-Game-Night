// Imports
import { Card, BaseType } from './card/index.js';

// Classes
export class Field {
	/* Instance Methods */
	public castSpell(card: Card): void {
		// Instant
		if ((card.baseType & BaseType.Instant) === BaseType.Instant) {

		}
		// Sorcery
		else if ((card.baseType & BaseType.Sorcery) === BaseType.Sorcery) {

		}
		// Permanent
		else {
			this.addPermanent(card);
		}
	}
	private addPermanent(card: Card): void {
		// Artifact
		if ((card.baseType & BaseType.Artifact) === BaseType.Artifact) {
		}
		// Creature
		if ((card.baseType & BaseType.Creature) === BaseType.Creature) {
		}
		// Enchantment
		if ((card.baseType & BaseType.Enchantment) === BaseType.Enchantment) {
		}
		// Land
		if ((card.baseType & BaseType.Land) === BaseType.Land) {
		}
	}
	/* Properties */
}
