import { Component, HostBinding, input } from '@angular/core';

import { FlickeringIconConfiguration } from './flickering-icon';

@Component({
	selector: 'flickering-icon',
	templateUrl: './flickering-icon.component.html',
	styleUrls: ['./flickering-icon.component.scss'],
})
export class FlickeringIconComponent {
	public readonly config = input.required<FlickeringIconConfiguration>();

	public readonly flickering = input(false);

	private visible = true;

	@HostBinding('class.invisible')
	public get invisible(): boolean {
		return !this.visible;
	}

	private get maxInvisibilityLength(): number {
		return this.config().maxInvisibilityLength * 1000;
	}

	private get maxTotalPerFlickerLength(): number {
		return this.config().maxTotalPerFlickerLength * 1000;
	}

	private get maxVisibilityLength(): number {
		return this.config().maxVisibilityLength * 1000;
	}

	private get minInvisibilityLength(): number {
		return this.config().minInvisibilityLength * 1000;
	}

	private get minTotalPerFlickerLength(): number {
		return this.config().minTotalPerFlickerLength * 1000;
	}

	private get minVisibilityLength(): number {
		return this.config().minVisibilityLength * 1000;
	}

	public startFlickering = (): void => {
		this.show();
	};

	public stopFlickering = (): void => {
		this.visible = true;
	};

	private getRandomValue = (min: number, max: number): number => {
		return Math.floor(Math.random() * (max - min) + min);
	};

	private hide = (visibility: number): void => {
		this.visible = false;
		const invisibility = this.getRandomValue(this.minInvisibilityLength, this.maxInvisibilityLength);

		let actualInvisibility = invisibility;

		// The visibility and invisibility length added together must not exceed the max total per-flicker length
		if ((visibility + invisibility) > this.maxTotalPerFlickerLength) {
			actualInvisibility = this.maxTotalPerFlickerLength - visibility;
		}

		// The visibility and invisibility length added together must not undercut the min total per-flicker length
		if ((visibility + invisibility) < this.minTotalPerFlickerLength) {
			actualInvisibility = this.minTotalPerFlickerLength - visibility;
		}

		setTimeout(() => {
			if (this.flickering()) {
				this.show();
			}
		}, actualInvisibility);
	};

	private show = (): void => {
		this.visible = true;
		const visibility = this.getRandomValue(this.minVisibilityLength, this.maxVisibilityLength);

		setTimeout(() => {
			if (this.flickering()) {
				this.hide(visibility);
			}
		}, visibility);
	};
}
