import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'smudge-timer',
  templateUrl: './smudge-timer.component.html',
  styleUrls: ['./smudge-timer.component.scss']
})
export class SmudgeTimerComponent {
  public readonly timerMax = 180 * 1000;

  public running = false;
  public timer: number = this.timerMax;

  private smudgeTimer!: NodeJS.Timer;

  @HostBinding("style.--progress")
  public get progress(): string {
    return (this.timer / this.timerMax * 100) + "%";
  }

  public startTimer = () => {
    this.running = true;
    this.smudgeTimer = setInterval(() => {
      this.timer -= 1000;
      if (this.timer === 0) {
        clearInterval(this.smudgeTimer);
      }
    }, 1000);
  }

  public stopTimer = () => {
    this.running = false;
    this.timer = this.timerMax;
    clearInterval(this.smudgeTimer);
  }
}
