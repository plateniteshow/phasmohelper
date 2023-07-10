import { Component, HostBinding, Input } from '@angular/core';
import { BoxComponent } from '../box/box.component';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  standalone: true,
  imports: [BoxComponent]
})
export class CheckboxComponent extends BoxComponent { }
