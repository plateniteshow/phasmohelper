import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

import { GHOSTS } from './data';
import { Difficulty, Evidence, Ghost, Speed } from './app';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly Evidence = Evidence;
  public readonly Speed = Speed;

  public ghostSelection: SelectionModel<Ghost>;

  constructor(
    private appService: AppService,
  ) {
    this.ghostSelection = new SelectionModel(true);
    // this.smudgeTimer = 0;
    // this.isSmugdeTimerRunning = false;
  }

  // public isSmugdeTimerRunning: boolean;
  // public smudgeTimer: number;
  public get filteredGhosts(): Ghost[] {
    return this.appService.filteredGhosts;
  }

  public get selectedDifficulty(): Difficulty {
    return this.appService.selectedDifficulty;
  }

  public set selectedDifficulty(value: Difficulty) {
    this.appService.selectedDifficulty = value;
  }

  public canHunt = (ghost: Ghost) => {
    return this.appService.selectedSanity <= ghost.huntSanity;
  }

  public isGhostSelected = (ghost: Ghost): boolean => {
    return this.ghostSelection.isSelected(ghost);
  }

  public reset = (): void => {
    // this.isSmugdeTimerRunning = false;
    // this.smudgeTimer = 0;
    this.appService.reset();
    this.ghostSelection.clear();
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
  public toggleGhostSelection = (ghost: Ghost) => {
    this.ghostSelection.toggle(ghost);
  }
}
