import { Component } from '@angular/core';

import { Speed } from 'src/app/app';

import { SpeedService } from './speed.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.scss']
})
export class SpeedComponent {
  public readonly Speed = Speed;
  public readonly speedSelection: SelectionModel<Speed>;

  constructor(
    private speedService: SpeedService,
  ) {
    this.speedSelection = new SelectionModel(true);

    this.speedService.speed$.subscribe((speeds) => {
      this.speedSelection.setSelection(...speeds);
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
