// Constants
export enum PhaseStep {
	// Beginning
	Untap, Upkeep, Draw,
	// Pre/Post-Combat Main
	PreMain, PostMain,
	// Combat
	CombatStart, DeclareAttackers, DeclareBlockers, Damage, CombatEnd,
	// Ending
	End, Cleanup
}
export const phaseStateTable: PhaseStep[] = [
	PhaseStep.Upkeep,            // ( 0)phaseStateTable[PhaseStep.Untap]
	PhaseStep.Draw,              // ( 1)phaseStateTable[PhaseStep.Upkeep]
	PhaseStep.PreMain,           // ( 2)phaseStateTable[PhaseStep.Draw]
	PhaseStep.CombatStart,       // ( 3)phaseStateTable[PhaseStep.PreMain]
	PhaseStep.End,               // ( 4)phaseStateTable[PhaseStep.PostMain]
	PhaseStep.DeclareAttackers,  // ( 5)phaseStateTable[PhaseStep.CombatStart]
	PhaseStep.DeclareBlockers,   // ( 6)phaseStateTable[PhaseStep.DeclareAttackers]
	PhaseStep.Damage,            // ( 7)phaseStateTable[PhaseStep.DeclareBlockers]
	PhaseStep.CombatEnd,         // ( 8)phaseStateTable[PhaseStep.Damage]
	PhaseStep.PostMain,          // ( 9)phaseStateTable[PhaseStep.CombatEnd]
	PhaseStep.Cleanup,           // (10)phaseStateTable[PhaseStep.End]
	PhaseStep.Untap,             // (11)phaseStateTable[PhaseStep.Cleanup]
] as const;
