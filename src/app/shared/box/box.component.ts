import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'box',
  template: '<ng-content></ng-content>',
  styleUrls: ['./box.component.scss'],
  standalone: true,
})
export class BoxComponent {
  @HostBinding('class.active')
  @Input()
  public active: boolean;

  @HostBinding('class.disabled')
  @Input()
  public disabled: boolean;

  constructor() {
    this.active = false;
    this.disabled = false;
  }
}
