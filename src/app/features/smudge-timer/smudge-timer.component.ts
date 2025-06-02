import { Component, HostBinding, HostListener } from '@angular/core';
import { PhButtonComponent } from '../../shared/ph-button/ph-button.component';
import { PhOutlinedButtonDirective } from '../../shared/ph-button/ph-outlined-button.directive';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'smudge-timer',
    templateUrl: './smudge-timer.component.html',
    styleUrls: ['./smudge-timer.component.scss'],
    imports: [PhButtonComponent, PhOutlinedButtonDirective, DatePipe]
})
export class SmudgeTimerComponent {
  public readonly defaultTimestamp = 90 * 1000;
  public readonly demonTimestamp = 120 * 1000;
  public readonly spiritTimestamp = 0;
  public readonly timerMax = 180 * 1000;

  public running = false;
  public timer: number = this.timerMax;

  private readonly speech: any;

  private smudgeTimer!: NodeJS.Timeout;

  @HostBinding("style.--defaultMarkerPosition")
  public get defaultMarkerPosition(): string {
    return (this.defaultTimestamp / this.timerMax * 100) + "%";
  }

  @HostBinding("style.--demonMarkerPosition")
  public get demonMarkerPosition(): string {
    return (this.demonTimestamp / this.timerMax * 100) + "%";
  }

  @HostBinding("style.--progress")
  public get progress(): string {
    return (this.timer / this.timerMax * 100) + "%";
  }

  @HostBinding("style.--spiritMarkerPosition")
  public get spiritMarkerPosition(): string {
    return (this.spiritTimestamp / this.timerMax * 100) + "%";
  }

  @HostListener('document:keydown.T', ['$event']) public onKeydownTHandler() {
    this.running ? this.stopTimer() : this.startTimer();
  }

  @HostListener('document:keydown.Escape', ['$event']) public onKeydownEscapeHandler() {
    this.stopTimer();
  }

  /**
   * Starts a spoken countdown.
   *
   * @param text What to say when the countdown starts
   * @param currentTime in ms
   * @param countDownEnd in ms
   * @param countdownLength in ms
   */
  public setCountDown = (text: string, currentTime: number, countDownEnd: number, countdownLength: number): void => {
    if (countdownLength === 0) {
      return;
    }

    // Start speech
    if (currentTime === countDownEnd + 7000) {
      this.speech
        .speak({
          text: text + ' ending in:',
        });
    }

    // Start countdown speech
    if (currentTime === countDownEnd + countdownLength + 1000) {
      let countdown = countdownLength / 1000;
      const interval = setInterval(() => {
        // If the countdown has run out OR the timer has been stopped, clear this interval.
        if (countdown === 0 || !this.running) {
          clearInterval(interval);
          return;
        }
        this.speech.speak({ text: `${countdown}` });
        countdown--;
      }, 1000);
    }
  }

  public startTimer = () => {
    this.running = true;

    this.smudgeTimer = setInterval(() => {
      this.timer -= 1000;
      if (this.timer === 0) {
        this.stopTimer();
      }
    }, 1000);
  }

  public stopTimer = () => {
    this.running = false;
    this.timer = this.timerMax;
    clearInterval(this.smudgeTimer);
  }
}
