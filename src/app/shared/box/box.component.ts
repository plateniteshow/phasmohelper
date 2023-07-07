import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'box',
  template: '<ng-content></ng-content>',
  styleUrls: ['./box.component.scss'],
  standalone: true,
})
export class BoxComponent {
  @HostBinding('class.disabled')
  @Input()
  public disabled: boolean;

  constructor() {
    this.disabled = false;
  }
}
