import { KeyValuePipe } from '@angular/common';
import { Component, WritableSignal } from '@angular/core';

import { ESpeed } from 'src/app/app';
import { AppService } from 'src/app/app.service';

import { BoxComponent } from '../../shared/box/box.component';

@Component({
	selector: 'speed',
	templateUrl: './speed.component.html',
	styleUrls: ['./speed.component.scss'],
	imports: [BoxComponent, KeyValuePipe],
})
export class SpeedComponent {
	public readonly ESpeed = ESpeed;

	constructor(
		private appService: AppService,
	) { }

	public get excludedSpeeds(): WritableSignal<ESpeed[]> {
		return this.appService.excludedSpeeds;
	}

	public get selectedSpeeds(): WritableSignal<ESpeed[]> {
		return this.appService.selectedSpeeds;
	}

	public isActive = (speed: ESpeed): boolean => {
		return this.selectedSpeeds().includes(speed);
	};

	public isDisabled = (_speed: ESpeed): boolean => false;

	public isIndeterminate = (speed: ESpeed): boolean => {
		return this.excludedSpeeds().includes(speed);
	};

	public toggle = (speed: ESpeed, event: MouseEvent): void => {
		if (event.shiftKey) {
			this.toggleExcludedSpeed(speed);
		} else {
			this.toggleSelectedSpeed(speed);
		}
	};

	private toggleExcludedSpeed = (speed: ESpeed): void => {
		// If the speed is already selected, unselect it
		if (this.selectedSpeeds().includes(speed)) {
			this.selectedSpeeds.update(e => e.filter(e => e !== speed));
		}

		// Update the excluded speeds
		this.excludedSpeeds.update(e => {
			if (e.includes(speed)) {
				return e.filter(e => e !== speed);
			} else {
				return [...e, speed];
			}
		});
	};

	private toggleSelectedSpeed = (speed: ESpeed): void => {
		// If the speed is already excluded, unexclude it
		if (this.excludedSpeeds().includes(speed)) {
			this.excludedSpeeds.update(e => e.filter(e => e !== speed));
		}

		// Update the selected speed
		this.selectedSpeeds.update(e => {
			if (e.includes(speed)) {
				return e.filter(e => e !== speed);
			} else {
				return [...e, speed];
			}
		});
	};
}
