import { Component, HostBinding, HostListener } from '@angular/core';

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

  @HostBinding('class.has-crt')
  public enableCRT = false;

  public enableSound = true;

  constructor(
    private appService: AppService,
    private ghostService: GhostService,
  ) { }

  public toggleCRT = () => {
    this.enableCRT = !this.enableCRT;
  }

  public toggleSound = () => {
    this.enableSound = !this.enableSound;
  }

  public get selectedGhost(): Ghost | undefined {
    return this.ghostService.selectedGhost;
  }

  @HostListener('document:keydown.R', ['$event']) public onKeydownHandler() {
    this.reset();
  }

  public reset = (): void => {
    this.appService.reset();
  }
}
