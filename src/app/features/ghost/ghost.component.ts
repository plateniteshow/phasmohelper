import { Component, OnDestroy } from '@angular/core';
import { Subscription, combineLatest } from 'rxjs';

import { AppService } from 'src/app/app.service';
import { Evidence, Ghost, Speed } from 'src/app/app';
import { GHOSTS } from 'src/app/data';

import { DifficultyService } from '../difficulty/difficulty.service';
import { EvidenceService } from '../evidence/evidence.service';
import { GhostService } from './ghost.service';
import { SpeedService } from '../speed/speed.service';

@Component({
  selector: 'ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.scss']
})
export class GhostComponent implements OnDestroy {
  private evidences$: Subscription;

  constructor(
    private difficultyService: DifficultyService,
    private evidenceService: EvidenceService,
    private speedService: SpeedService,
    private ghostService: GhostService,
  ) {
    this.evidences$ =
      combineLatest([
        this.difficultyService.numberOfEvidences$,
        this.evidenceService.selectedEvidences$,
        this.evidenceService.excludedEvidences$,
        this.speedService.selectedSpeeds$,
        this.speedService.excludedSpeeds$,
      ]).subscribe(([numberOfEvidences, selectedEvidences, excludedEvidences, selectedSpeeds, excludedSpeeds]) => {
        this.filterGhosts(numberOfEvidences, selectedEvidences, excludedEvidences, selectedSpeeds, excludedSpeeds);
      });
  }

  public get ghosts(): Ghost[] {
    return GHOSTS;
  }

  public isGhostActive = (ghost: Ghost) => {
    return this.ghostService.selectedGhost === ghost;
  };

  public isGhostDisabled = (ghost: Ghost) => {
    return !this.ghostService.selectableGhosts.includes(ghost);
  }

  public isGhostIndeterminate = (ghost: Ghost) => {
    return this.ghostService.excludedGhosts.includes(ghost);
  };

  public ngOnDestroy(): void {
    this.evidences$.unsubscribe();
  }

  public onClickGhost = (ghost: Ghost, event: MouseEvent) => {
    if (event.shiftKey) {
      this.ghostService.excludeGhost(ghost);
    } else {
      this.ghostService.selectGhost(ghost);
    }
  }

  private filterGhosts = (numberOfEvidences: number, selectedEvidences: Evidence[], excludedEvidences: Evidence[], selectedSpeeds: Speed[], excludedSpeeds: Speed[]) => {
    let ghosts: Ghost[] = GHOSTS;

    if (selectedEvidences.length > numberOfEvidences) {
      ghosts = GHOSTS.filter(g => g.id === 20);
      this.ghostService.selectableGhosts = ghosts;
      return;
    }

    // Filter all ghosts whose evidences are excluded
    if (excludedEvidences.length > 0) {
      ghosts = ghosts.filter(g => !excludedEvidences.some(e => g.evidences.includes(e)));
    }

    // Filter by evidences
    if (selectedEvidences.length > 0) {
      ghosts = ghosts.filter(g => selectedEvidences.every(e => g.evidences.includes(e)));
    }

    // Filter all ghosts whose speeds are excluded
    if (excludedSpeeds.length > 0) {
      ghosts = ghosts.filter(g => !excludedSpeeds.some(e => g.speeds.includes(e)));
    }

    // Filter by speed
    if (selectedSpeeds.length > 0) {
      ghosts = ghosts.filter(g => selectedSpeeds.every(s => g.speeds.includes(s)));
    }

    this.ghostService.selectableGhosts = ghosts;
  }
}
