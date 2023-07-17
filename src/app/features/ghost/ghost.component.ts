import { Component, OnDestroy } from '@angular/core';
import { Evidence, Ghost, Speed } from 'src/app/app';
import { GhostService } from './ghost.service';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { EvidenceService } from '../evidence/evidence.service';
import { GHOSTS } from 'src/app/data';
import { SpeedService } from '../speed/speed.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.scss']
})
export class GhostComponent implements OnDestroy {
  private evidences$: Subscription;

  constructor(
    private appService: AppService,
    private evidenceService: EvidenceService,
    private speedService: SpeedService,
    private ghostService: GhostService,
  ) {
    this.evidences$ =
      combineLatest([
        this.evidenceService.evidence$,
        this.speedService.speed$
      ]).subscribe(([evidences, speeds]) => {
        this.filterGhosts(evidences, speeds);
      });

    this.appService.reset$.subscribe(() => {
      this.ghostService.selectedGhost = undefined;
    });
  }

  /** @deprecated move to GhostComponent */
  // public get filteredGhosts(): Ghost[] {
  // let filteredGhosts = this.ghosts;

  // Filter all ghosts by selected evidences
  // filteredGhosts = this.ghosts.filter(g => {
  //   return this.selectedEvidences.every(s => g.evidences.includes(s));
  // });

  // If all possible evidences are selected, filter out all ghosts that have a forced evidence which was not selected
  // if (this.selectedEvidences.length === this.numberOfEvidences) {
  //   filteredGhosts = filteredGhosts.filter(g => {
  //     if (g.forcedEvidence) {
  //       return this.selectedEvidences.includes(g.forcedEvidence);
  //     }
  //     return true;
  //   });
  // }

  // Filter fast ghosts
  // if (this.selectedSpeed.includes(Speed.FAST)) {
  //   filteredGhosts = filteredGhosts.filter(g => g.huntSpeed.some(s => s > 1.7));
  // }

  // Filter normal ghosts
  // if (this.selectedSpeed.includes(Speed.NORMAL)) {
  //   filteredGhosts = filteredGhosts.filter(g => g.huntSpeed.some(s => s === 1.7));
  // }

  // Filter slow ghosts
  // if (this.selectedSpeed.includes(Speed.SLOW)) {
  //   filteredGhosts = filteredGhosts.filter(g => g.huntSpeed.some(s => s < 1.7));
  // }

  // return filteredGhosts;
  //   return [];
  // }
  public get ghosts$(): Observable<Ghost[]> {
    return this.ghostService.ghosts$;
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
