import { Component, OnDestroy } from '@angular/core';
import { Evidence, Ghost } from 'src/app/app';
import { GhostService } from './ghost.service';
import { Observable, Subscription } from 'rxjs';
import { EvidenceService } from '../evidence/evidence.service';
import { GHOSTS } from 'src/app/data';

@Component({
  selector: 'ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.scss']
})
export class GhostComponent implements OnDestroy {
  private evidences$: Subscription;

  constructor(
    private evidenceService: EvidenceService,
    private ghostService: GhostService,
  ) {
    this.evidences$ = this.evidenceService.evidence$.subscribe(evidences => {
      this.filterGhosts(evidences);
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

  private filterGhosts = (evidences: Evidence[]) => {
    if (evidences.length === 0) {
      this.ghostService.ghosts = GHOSTS;
    } else {
      this.ghostService.ghosts = GHOSTS.filter(g => evidences.every(e => g.evidences.includes(e)));
    }
  }
}
