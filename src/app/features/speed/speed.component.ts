import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

import { AppService } from 'src/app/app.service';
import { Speed } from 'src/app/app';

import { SpeedService } from './speed.service';

@Component({
  selector: 'speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.scss']
})
export class SpeedComponent {
  public readonly Speed = Speed;
  public readonly speedSelection: SelectionModel<Speed>;

  constructor(
    private appService: AppService,
    private speedService: SpeedService,
  ) {
    this.speedSelection = new SelectionModel(true);

    this.appService.reset$.subscribe(() => {
      this.speedSelection.clear();
      this.speedService.speeds = [];
    });
  }

  public isSelected = (speed: Speed): boolean => {
    return this.speedSelection.isSelected(speed);
  }

  public toggle = (evidence: Speed) => {
    this.speedSelection.toggle(evidence);
    this.speedService.speeds = this.speedSelection.selected;
  }
}
