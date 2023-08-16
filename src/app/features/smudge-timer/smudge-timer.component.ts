// @ts-ignore
import Speech from "speak-tts";

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
  private readonly speech: any;

  constructor() {
    const speech = new Speech();
    speech.init({
      volume: 0.25,
      lang: "en-GB",
      rate: 1,
      pitch: 1,
    });
    this.speech = speech;
  }

  @HostBinding("style.--progress")
  public get progress(): string {
    return (this.timer / this.timerMax * 100) + "%";
  }

  public startTimer = () => {
    this.running = true;

    this.smudgeTimer = setInterval(() => {
      this.timer -= 1000;

      // Demon Smudge
      this.setCountDown('Demon Smudge', this.timer, 170, 5);

      // Default Smudge
      this.setCountDown('Default Smudge', this.timer, 90, 5);

      // Spirit Smudge
      this.setCountDown('Spirit Smudge', this.timer, 0, 5);

      if (this.timer === 0) {
        this.stopTimer();
      }
    }, 1000);
  }

  public setCountDown = (text: string, currentTime: number, countDownEnd: number, countdownLength: number) => {
    if (countdownLength === 0) {
      return;
    }

    // Start speech
    if (currentTime / 1000 === countDownEnd + 7) {
      this.speech
        .speak({
          text: text + ' ending in:',
        });
    }

    // Start countdown speech
    if (currentTime / 1000 === countDownEnd + countdownLength + 1) {
      let countdown = countdownLength;
      const interval = setInterval(() => {
        this.speech.speak({ text: `${countdown}` });
        countdown--;
        if (countdown === 0) {
          clearInterval(interval);
        }
      }, 1000);
    }

  }

  public stopTimer = () => {
    this.running = false;
    this.timer = this.timerMax;
    clearInterval(this.smudgeTimer);
  }
}
