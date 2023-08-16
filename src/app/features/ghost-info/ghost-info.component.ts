import { Component, Input } from '@angular/core';
import { Ghost } from 'src/app/app';

@Component({
  selector: 'ghost-info',
  templateUrl: './ghost-info.component.html',
  styleUrls: ['./ghost-info.component.scss']
})
export class GhostInfoComponent {
  @Input()
  public ghost!: Ghost;
}
