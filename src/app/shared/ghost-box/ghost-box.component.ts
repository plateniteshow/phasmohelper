import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Ghost } from 'src/app/app';

@Component({
  selector: 'ghost-box',
  templateUrl: './ghost-box.component.html',
  styleUrls: ['./ghost-box.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class GhostBoxComponent {
  @Input()
  public ghost!: Ghost;
}
