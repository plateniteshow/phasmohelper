import { ActivatedRoute, Router } from '@angular/router';
import { Component, HostListener } from '@angular/core';

import { EDifficulty, EEvidence, Ghost, ESpeed } from './app';
import { AppService } from './app.service';

// TODO: How to properly translate 0 and 1 to false and true?
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
