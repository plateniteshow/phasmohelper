import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { EEvidence, Ghost } from 'src/app/app';

import { DifficultyService } from '../difficulty/difficulty.service';
import { EvidenceService } from './evidence.service';
import { GhostService } from '../ghost/ghost.service';

@Component({
  selector: 'evidence',
  templateUrl: './evidence.component.html',
  styleUrls: ['./evidence.component.scss'],
})
export class EvidenceComponent implements OnDestroy {
  public readonly Evidence = EEvidence;

  private ghosts: Ghost[];
  private ghosts$: Subscription;
  private numberOfEvidences: number;
  private numberOfEvidences$: Subscription;

  constructor(
    private difficultyService: DifficultyService,
    private evidenceService: EvidenceService,
    private ghostService: GhostService,
  ) {
    this.ghosts = [];
    this.numberOfEvidences = 3;

    this.numberOfEvidences$ = this.difficultyService.numberOfEvidences$.subscribe(numberOfEvidences => {
      this.numberOfEvidences = numberOfEvidences;
      this.evidenceService.selectedEvidences = [];
    });

    this.ghosts$ = this.ghostService.selectableGhosts$.subscribe(ghosts => {
      this.ghosts = ghosts;
    });
  }

  public isEvidenceDisabled = (evidence: EEvidence) => {
    // If evidence is already selected, do not disable
    if (this.evidenceService.selectedEvidences.includes(evidence)) {
      return false;
    }

    // If all of the filtered ghosts cannot have this evidence AND this evidence was not manually excluded, disable evidence
    if (!this.evidenceService.excludedEvidences.includes(evidence) && this.ghosts.map(g => g.evidences).every(e => !e.includes(evidence))) {
      return true;
    }

    // If evidence is orbs, do not disable
    if (this.ghosts.some(g => g.id === 20) && evidence === EEvidence.GHOST_ORB) {
      return false;
    }

    // If all evidences AND Ghost Orbs are selected, allow selection of Fingerprints, Freezing or Spiritbox.
    if (
      this.evidenceService.selectedEvidences.length === this.numberOfEvidences &&
      this.evidenceService.selectedEvidences.includes(EEvidence.GHOST_ORB) &&
      [EEvidence.ULTRAVIOLET, EEvidence.FREEZING_TEMPERATURES, EEvidence.SPIRIT_BOX].includes(evidence)
    ) {
      return false;
    }

    // Otherwise, compare number of selected items with max number of allowed evidence (defined by difficulty)
    return this.evidenceService.selectedEvidences.length >= this.numberOfEvidences;
  }

  public isEvidenceSelected = (evidence: EEvidence): boolean => {
    return this.evidenceService.selectedEvidences.includes(evidence);
  }

  public isEvidenceIndeterminate = (evidence: EEvidence): boolean => {
    return this.evidenceService.excludedEvidences.includes(evidence);
  }

  public ngOnDestroy(): void {
    this.ghosts$.unsubscribe();
    this.numberOfEvidences$.unsubscribe();
  }

  public onClickEvidence = (evidence: EEvidence, event: MouseEvent) => {
    if (event.shiftKey) {
      this.evidenceService.excludeEvidence(evidence);
    } else {
      this.evidenceService.selectEvidence(evidence);
    }
  }
}
