import { CommonModule } from '@angular/common';
import { Component, HostBinding, input } from '@angular/core';

import { GhostInput } from 'src/app/features/ghost/ghost';

@Component({
	selector: 'ghost-box',
	templateUrl: './ghost-box.component.html',
	styleUrls: ['./ghost-box.component.scss'],
	imports: [CommonModule],
})
export class GhostBoxComponent {
	public readonly ghost = input.required<GhostInput>();

	/////////////////////
	// Getter & Setter //
	/////////////////////

	@HostBinding('class.is-excluded')
	public get isExcluded(): boolean {
		return this.ghost().isExcluded;
	}

	@HostBinding('class.is-selected')
	public get isSelected(): boolean {
		return this.ghost().isSelected;
	}

	////////////////////
	// Public Methods //
	////////////////////

	public getHuntSanityClass(): string[] {
		const sanity = this.ghost().huntSanity;
		return ['hunt-sanity', sanity > 50 ? 'hunt-sanity--high' : sanity < 50 ? 'hunt-sanity--low' : ''];
	}
}
