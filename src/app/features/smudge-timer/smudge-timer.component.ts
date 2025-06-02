import { DatePipe } from '@angular/common';
import { Component, HostBinding, HostListener } from '@angular/core';

import { PhButtonComponent } from '../../shared/ph-button/ph-button.component';
import { PhOutlinedButtonDirective } from '../../shared/ph-button/ph-outlined-button.directive';

@Component({
	selector: 'smudge-timer',
	templateUrl: './smudge-timer.component.html',
	styleUrls: ['./smudge-timer.component.scss'],
	imports: [PhButtonComponent,
		PhOutlinedButtonDirective,
		DatePipe],
})
export class SmudgeTimerComponent {
	public readonly defaultTimestamp = 90 * 1000;
	public readonly demonTimestamp = 120 * 1000;
	public readonly spiritTimestamp = 0;
	public readonly timerMax = 180 * 1000;

	public running = false;
	public timer: number = this.timerMax;

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

  @HostListener('document:keydown.T', ['$event'])
  public onKeydownTHandler(): void {
  	if (this.running) {
  		this.stopTimer();
  	} else {
  		this.startTimer();
  	}
  }

  @HostListener('document:keydown.Escape', ['$event'])
  public onKeydownEscapeHandler(): void {
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

  	// Start countdown speech
  	if (currentTime === countDownEnd + countdownLength + 1000) {
  		let countdown = countdownLength / 1000;
  		const interval = setInterval(() => {
  			// If the countdown has run out OR the timer has been stopped, clear this interval.
  			if (countdown === 0 || !this.running) {
  				clearInterval(interval);
  				return;
  			}
  			countdown--;
  		}, 1000);
  	}
  };

  public startTimer = (): void => {
  	this.running = true;

  	this.smudgeTimer = setInterval(() => {
  		this.timer -= 1000;
  		if (this.timer === 0) {
  			this.stopTimer();
  		}
  	}, 1000);
  };

  public stopTimer = (): void => {
  	this.running = false;
  	this.timer = this.timerMax;
  	clearInterval(this.smudgeTimer);
  };
}
