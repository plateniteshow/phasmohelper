import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';

import { EDifficulty, EEvidence, ESpeed, Ghost } from './app';
import { GHOSTS } from './data';

@Injectable()
export class AppService {
  public excludedEvidences: WritableSignal<EEvidence[]> = signal([]);
  public excludedGhosts: WritableSignal<Ghost[]> = signal([]);
  public excludedSpeeds: WritableSignal<ESpeed[]> = signal([]);
  public selectedDifficulty: WritableSignal<EDifficulty> = signal(EDifficulty.PROFESSIONAL);
  public selectedEvidences: WritableSignal<EEvidence[]> = signal([]);
  public selectedGhost: WritableSignal<Ghost | undefined> = signal(undefined);
  public selectedSpeeds: WritableSignal<ESpeed[]> = signal([]);

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

  public readonly availableGhosts: Signal<Ghost[]> = computed(() => {
    return GHOSTS.filter(g =>
      // Evidences
      !g.evidences.some(e => this.excludedEvidences().includes(e)) &&
      this.selectedEvidences().every(e =>
        g.evidences.includes(e) &&
        g.evidences.every(ev => !this.excludedEvidences().includes(ev))
      ) &&
      // Speeds
      !g.speeds.some(s => this.excludedSpeeds().includes(s)) &&
      this.selectedSpeeds().every(s =>
        g.speeds.includes(s) &&
        g.speeds.every(sp => !this.excludedSpeeds().includes(sp))
      )
    );
  });

  public reset = (): void => {
    this.excludedEvidences.set([]);
    this.excludedGhosts.set([]);
    this.excludedSpeeds.set([]);
    this.selectedEvidences.set([]);
    this.selectedGhost.set(undefined);
    this.selectedSpeeds.set([]);
  }
}
