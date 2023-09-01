import { Howl } from 'howler';

import { Component, HostListener, Input, OnDestroy } from '@angular/core';
import { Ghost } from 'src/app/app';

@Component({
  selector: 'ghost-info',
  templateUrl: './ghost-info.component.html',
  styleUrls: ['./ghost-info.component.scss']
})
export class GhostInfoComponent implements OnDestroy {
  /** Whether this component is allowed to play sounds or not */
  @Input()
  public enableSound = true;
  @Input()
  public ghost!: Ghost;

  private interval?: NodeJS.Timer;
  private sound: Howl;

  constructor() {
    this.sound = new Howl({
      src: ["../../../assets/click.mp3"],
    });
  }

  public ngOnDestroy(): void {
    this.stopHuntSpeed();
  }

  public toggleHuntSpeed = (huntSpeed: number) => {
    if (this.interval) {
      this.stopHuntSpeed();
    } else {
      this.playHuntSpeed(huntSpeed);
    }
  }

  // TODO: Indicator on icon whether a sound is playing
  private playHuntSpeed = (huntSpeed: number) => {
    if (!this.enableSound) {
      console.warn('Audio is currently disabled. You can activate it by clicking on the speakers icon in the top right corner of the window.');
      return;
    }

    // Play sound initially
    this.sound.play();

    // Keep on playing sound periodically (TODO: Currently 10 times)
    this.interval = setInterval(() => {
      this.sound.play();
    }, 1000 / huntSpeed);
  }

  private stopHuntSpeed = () => {
    clearInterval(this.interval);
  }
}
