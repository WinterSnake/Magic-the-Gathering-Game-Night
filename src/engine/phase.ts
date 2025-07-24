// Constants
export enum PhaseStep {
	// Beginning
	Untap, Upkeep, Draw,
	// Main[Pre]
	PreMain,
	// Combat
	CombatStart, Attackers, Blockers, Damage, CombatEnd,
	// Main[Post]
 	PostMain,
	// Ending
	End, Cleanup,
}
export const phaseStateTable: PhaseStep[] = [
	PhaseStep.Upkeep,       // state[Untap]       -> Upkeep
	PhaseStep.Draw,         // state[Upkeep]      -> Draw
	PhaseStep.PreMain,      // state[Draw]        -> PreMain
	PhaseStep.CombatStart,  // state[PreMain]     -> CombatStart
	PhaseStep.Attackers,    // state[CombatStart] -> Attackers
	PhaseStep.Blockers,     // state[Attackers]   -> Blockers
	PhaseStep.Damage,       // state[Blockers]    -> Damage
	PhaseStep.CombatEnd,    // state[Damage]      -> CombatEnd
	PhaseStep.PostMain,     // state[CombatEnd]   -> PostMain
	PhaseStep.End,          // state[PostMain]    -> End
	PhaseStep.Cleanup,      // state[End]         -> Cleanup
	PhaseStep.Untap,        // state[Cleanup]     -> Untap
] as const;
