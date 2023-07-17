import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Evidence, Ghost, Speed } from './app';
import { GhostService } from './features/ghost/ghost.service';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly Evidence = Evidence;
  public readonly Speed = Speed;

  constructor(
    private appService: AppService,
    private ghostService: GhostService,
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
    this.appService.reset();
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
