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

  // @HostBinding('class.indeterminate')
  // @Input()
  // public indeterminate: boolean;

  constructor() {
    this.active = false;
    this.disabled = false;
    // this.indeterminate = false;
  }

  // @HostListener('click', ['$event'])
  // public onClick = (event: MouseEvent) => {
  //   if (event.shiftKey) {
  //     this.active = false;
  //     this.indeterminate = !this.indeterminate;
  //   } else {
  //     this.active = !this.active;
  //   }
  // }
}
