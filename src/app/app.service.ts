import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';

import { EDifficulty, EEvidence, ESpeed, Ghost } from './app';
import { GHOSTS } from './data';

/**
 * Service class that manages the state and logic of the Phasmophobia app.
 */
@Injectable()
export class AppService {
	/**
   * Computed signal that calculates the list of available ghosts based on the selected evidences and speeds.
   * @returns The list of available ghosts.
   */
	public readonly availableGhosts: Signal<Ghost[]> = computed(() => {
		return GHOSTS.filter(g =>
		// Evidences
			!g.evidences.some(e => this.excludedEvidences().includes(e)) &&
      this.selectedEvidences().every(e =>
      	g.evidences.includes(e) &&
        g.evidences.every(ev => !this.excludedEvidences().includes(ev)),
      ) &&
      // Speeds
      !g.speeds.some(s => this.excludedSpeeds().includes(s)) &&
      this.selectedSpeeds().every(s =>
      	g.speeds.includes(s) &&
        g.speeds.every(sp => !this.excludedSpeeds().includes(sp)),
      ),
		);
	});

	public excludedEvidences: WritableSignal<EEvidence[]> = signal([]);
	public excludedGhosts: WritableSignal<Ghost[]> = signal([]);
	public excludedSpeeds: WritableSignal<ESpeed[]> = signal([]);
	public selectedDifficulty: WritableSignal<EDifficulty> = signal(EDifficulty.INSANITY);
	public selectedEvidences: WritableSignal<EEvidence[]> = signal([]);
	public selectedGhost: WritableSignal<Ghost | undefined> = signal(undefined);
	public selectedSpeeds: WritableSignal<ESpeed[]> = signal([]);

	/**
   * Computed signal that calculates the number of evidences based on the selected difficulty.
   * @returns The number of evidences.
   */
	public numberOfEvidences: Signal<number> = computed(() => {
		switch (this.selectedDifficulty()) {
		case EDifficulty.PROFESSIONAL:
			return 3;
		case EDifficulty.NIGHTMARE:
			return 2;
		case EDifficulty.INSANITY:
			return 1;
		case EDifficulty.APOCALYPSE:
			return 0;
		}
	});

	/**
   * Resets the state of the app service.
   */
	public reset = (): void => {
		this.excludedEvidences.set([]);
		this.excludedGhosts.set([]);
		this.excludedSpeeds.set([]);
		this.selectedEvidences.set([]);
		this.selectedGhost.set(undefined);
		this.selectedSpeeds.set([]);
	};
}
