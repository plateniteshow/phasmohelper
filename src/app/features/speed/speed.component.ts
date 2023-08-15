import { Component } from '@angular/core';
import { Speed } from 'src/app/app';
import { SpeedService } from './speed.service';

@Component({
  selector: 'speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.scss']
})
export class SpeedComponent {
  public readonly Speed = Speed;

  constructor(
    private speedService: SpeedService,
  ) {
  }

  public isSpeedSelected = (speed: Speed): boolean => {
    return this.speedService.selectedSpeeds.includes(speed);
  }

  public isSpeedIndeterminate = (speed: Speed): boolean => {
    return this.speedService.excludedSpeeds.includes(speed);
  }

  public onClickSpeed = (speed: Speed, event: MouseEvent) => {
    if (event.shiftKey) {
      this.speedService.excludeSpeed(speed);
    } else {
      this.speedService.selectSpeed(speed);
    }
  }
}
