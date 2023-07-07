import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ph-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent {
  @HostBinding('class.disabled')
  @Input()
  public disabled: boolean;

  constructor() {
    this.disabled = false;
  }
}
