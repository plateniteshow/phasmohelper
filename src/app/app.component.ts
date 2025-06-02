import { Component, HostListener } from '@angular/core';

import { EDifficulty, EEvidence, ESpeed } from './app';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
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
