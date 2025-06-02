import { Component, HostListener } from '@angular/core';

import { EDifficulty, EEvidence, ESpeed } from './app';
import { AppService } from './app.service';
import { GhostComponent } from './features/ghost/ghost.component';
import { FlickerSimulatorComponent } from './features/flicker-simulator/flicker-simulator.component';
import { DifficultyComponent } from './features/difficulty/difficulty.component';
import { EvidenceComponent } from './features/evidence/evidence.component';
import { SpeedComponent } from './features/speed/speed.component';
import { PhButtonComponent } from './shared/ph-button/ph-button.component';
import { SmudgeTimerComponent } from './features/smudge-timer/smudge-timer.component';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    DifficultyComponent,
    EvidenceComponent,
    FlickerSimulatorComponent,
    GhostComponent,
    PhButtonComponent,
    SmudgeTimerComponent,
    SpeedComponent,
  ]
})
export class AppComponent {
  public readonly Evidence = EEvidence;
  public readonly Speed = ESpeed;

  public defaultDifficulty = EDifficulty.PROFESSIONAL;

  constructor(
    private appService: AppService,
  ) { }

  @HostListener('document:keydown.R', ['$event'])
  @HostListener('document:keydown.Escape', ['$event'])
  public onKeydownHandler() {
    this.reset();
  }

  public reset = (): void => {
    this.appService.reset();
  }
}
