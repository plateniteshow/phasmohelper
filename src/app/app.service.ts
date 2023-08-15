import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GhostService } from './features/ghost/ghost.service';
import { EvidenceService } from './features/evidence/evidence.service';
import { SpeedService } from './features/speed/speed.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public readonly reset$: Observable<void>;

  private resetSource: Subject<void>;

  constructor(
    private evidenceService: EvidenceService,
    private ghostService: GhostService,
    private speedService: SpeedService,
  ) {
    this.resetSource = new Subject<void>();
    this.reset$ = this.resetSource.asObservable();
  }

  public reset = (): void => {
    this.evidenceService.excludedEvidences = [];
    this.evidenceService.selectedEvidences = [];
    this.ghostService.excludedGhosts = [];
    this.ghostService.selectedGhost = undefined;
    this.speedService.excludedSpeeds = [];
    this.speedService.selectedSpeeds = [];
    this.resetSource.next();
  }
}
