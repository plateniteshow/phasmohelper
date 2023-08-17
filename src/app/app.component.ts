import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, HostBinding, HostListener } from '@angular/core';

import { Difficulty, Evidence, Ghost, Speed } from './app';
import { GhostService } from './features/ghost/ghost.service';
import { AppService } from './app.service';

// TODO: How to properly translate 0 and 1 to false and true?
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly Evidence = Evidence;
  public readonly Speed = Speed;

  @HostBinding('class.has-crt')
  public enableCRT = true;

  public enableSound = false;
  public defaultDifficulty = Difficulty.PROFESSIONAL;

  constructor(
    private appService: AppService,
    private ghostService: GhostService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['crt']) {
        this.enableCRT = params['crt'] == 1;
      }
      if (params['snd']) {
        this.enableSound = params['snd'] == 1;
      }
    });
  }

  public get selectedGhost(): Ghost | undefined {
    return this.ghostService.selectedGhost;
  }

  @HostListener('document:keydown.R', ['$event'])
  @HostListener('document:keydown.Escape', ['$event'])
  public onKeydownHandler() {
    this.reset();
  }

  public reset = (): void => {
    this.appService.reset();
  }

  public toggleCRT = () => {
    this.router.navigate(['.'], { relativeTo: this.route, queryParams: { ...this.route.snapshot.queryParams, crt: this.enableCRT ? 0 : 1 } });
  }

  public toggleSound = () => {
    this.router.navigate(['.'], { relativeTo: this.route, queryParams: { ...this.route.snapshot.queryParams, snd: this.enableSound ? 0 : 1 } });
  }
}
