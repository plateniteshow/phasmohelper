import { Component, OnDestroy } from '@angular/core';
import { Evidence, Ghost, Speed } from 'src/app/app';
import { GhostService } from './ghost.service';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { EvidenceService } from '../evidence/evidence.service';
import { GHOSTS } from 'src/app/data';
import { SpeedService } from '../speed/speed.service';
import { AppService } from 'src/app/app.service';
import { DifficultyService } from '../difficulty/difficulty.service';

@Component({
  selector: 'ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.scss']
})
export class GhostComponent implements OnDestroy {
  private evidences$: Subscription;

  constructor(
    private appService: AppService,
    private difficultyService: DifficultyService,
    private evidenceService: EvidenceService,
    private speedService: SpeedService,
    private ghostService: GhostService,
  ) {
    this.evidences$ =
      combineLatest([
        this.difficultyService.numberOfEvidences$,
        this.evidenceService.evidence$,
        this.speedService.speed$
      ]).subscribe(([numberOfEvidences, evidences, speeds]) => {
        if (numberOfEvidences < evidences.length) {
          // TODO: This is kind of hacky
          this.ghostService.ghosts = GHOSTS.filter(g => g.name === 'The Mimic');
        } else {
          this.filterGhosts(evidences, speeds);
        }
      });

    this.appService.reset$.subscribe(() => {
      this.ghostService.selectedGhost = undefined;
    });
  }

  public get ghosts(): Ghost[] {
    return GHOSTS;
  }

  public isGhostDisabled = (ghost: Ghost): boolean => {
    return !this.ghostService.ghosts.includes(ghost);
  }

  public isGhostSelected = (ghost: Ghost): boolean => {
    return this.ghostService.selectedGhost === ghost;
  }

  public ngOnDestroy(): void {
    this.evidences$.unsubscribe();
  }

  public toggleGhostSelection = (ghost: Ghost) => {
    if (this.ghostService.selectedGhost === ghost) {
      this.ghostService.selectedGhost = undefined;
    } else {
      this.ghostService.selectedGhost = ghost;
    }
  }

  private filterGhosts = (evidences: Evidence[], speeds: Speed[]) => {
    let ghosts: Ghost[] = GHOSTS;

    // Filter by evidences
    if (evidences.length > 0) {
      ghosts = ghosts.filter(g => evidences.every(e => g.evidences.includes(e)));
    }

    // Filter by speed
    if (speeds.length > 0) {
      ghosts = ghosts.filter(g => speeds.every(s => g.speeds.includes(s)));
    }

    this.ghostService.ghosts = ghosts;
  }
}
