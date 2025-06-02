import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { Ghost } from 'src/app/app';

@Component({
	selector: 'ghost-box',
	templateUrl: './ghost-box.component.html',
	styleUrls: ['./ghost-box.component.scss'],
	imports: [CommonModule],
})
export class GhostBoxComponent {
	public readonly ghost = input.required<Ghost>();
}
