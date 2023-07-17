import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DifficultyService } from './features/difficulty/difficulty.service';
import { Evidence, Ghost, Speed } from './app';
import { EvidenceService } from './features/evidence/evidence.service';
import { GhostService } from './features/ghost/ghost.service';
import { SpeedService } from './features/speed/speed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly Evidence = Evidence;
  public readonly Speed = Speed;

  constructor(
    private difficultyService: DifficultyService,
    private evidenceService: EvidenceService,
    private ghostService: GhostService,
    private speedService: SpeedService,
  ) {
    // this.smudgeTimer = 0;
    // this.isSmugdeTimerRunning = false;
  }

  // public isSmugdeTimerRunning: boolean;
  // public smudgeTimer: number;

  public get selectedGhost$(): Observable<Ghost | undefined> {
    return this.ghostService.selectedGhost$;
  }

  public reset = (): void => {
    // this.isSmugdeTimerRunning = false;
    // this.smudgeTimer = 0;
    this.difficultyService.reset();
    this.evidenceService.reset();
    this.ghostService.reset();
    this.speedService.reset();
  }

  // public toggleSmudgeTimer = (): void => {
  //   let smudgeInterval: any;
  //   if (this.isSmugdeTimerRunning) {
  //     // Stop Smudge Timer
  //     this.isSmugdeTimerRunning = false;
  //     clearInterval(smudgeInterval);
  //   } else {
  //     // Start Smudge Timer
  //     this.smudgeTimer = 0;
  //     this.isSmugdeTimerRunning = true;
  //     smudgeInterval = setInterval(() => {
  //       this.smudgeTimer += 1;
  //       // Automatically Stop Smudge Timer
  //       if (this.smudgeTimer === 180) {
  //         this.isSmugdeTimerRunning = false;
  //         clearInterval(smudgeInterval);
  //       }
  //     }, 1000);
  //   }
  // }
}
