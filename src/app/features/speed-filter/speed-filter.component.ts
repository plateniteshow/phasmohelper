import { Component } from '@angular/core';

import { Speed } from 'src/app/app';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'speed-filter',
  templateUrl: './speed-filter.component.html',
  styleUrls: ['./speed-filter.component.scss']
})
export class SpeedFilterComponent {
  public readonly Speed = Speed;

  constructor(
    private appService: AppService,
  ) { }

  public isSpeedSelected = (speed: Speed): boolean => {
    return this.appService.speedSelection.isSelected(speed);
  }

  public toggleSpeedSelection = (speed: Speed) => {
    this.appService.speedSelection.toggle(speed);
  }
}
