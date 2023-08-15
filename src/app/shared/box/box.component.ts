import { Component, HostBinding, HostListener, Input } from '@angular/core';

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

  @HostBinding('class.indeterminate')
  @Input()
  public indeterminate: boolean;

  constructor() {
    this.active = false;
    this.disabled = false;
    this.indeterminate = false;
  }
}
