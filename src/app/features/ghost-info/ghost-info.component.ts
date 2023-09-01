import { Howl } from 'howler';

import { Component, Input } from '@angular/core';
import { Ghost } from 'src/app/app';

@Component({
  selector: 'ghost-info',
  templateUrl: './ghost-info.component.html',
  styleUrls: ['./ghost-info.component.scss']
})
export class GhostInfoComponent {
  @Input()
  public ghost!: Ghost;

  private sound: Howl;

  private interval?: NodeJS.Timer;

  constructor() {
    this.sound = new Howl({
      src: ["../../../assets/click.mp3"],
    });
  }

  // TODO: Do not stop speed automatically
  // TODO: Indicator on icon whether a sound is playing
  public playHuntSpeed = (huntSpeed: number) => {
    var times = 9;

    if (this.interval) {
      clearInterval(this.interval);
    }

    // Play sound initially
    this.sound.play();

    // Keep on playing sound periodically (TODO: Currently 10 times)
    this.interval = setInterval(() => {
      this.sound.play();
      times--;
      if (times === 0) {
        clearInterval(this.interval);
      }
    }, 1000 / huntSpeed);
  }
}
