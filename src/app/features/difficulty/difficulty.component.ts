import { KeyValuePipe } from '@angular/common';
import { Component, Signal, WritableSignal } from '@angular/core';

import { EDifficulty, EEvidence } from 'src/app/app';
import { AppService } from 'src/app/app.service';

import { PhButtonComponent } from '../../shared/ph-button/ph-button.component';
import { PhIconButtonDirective } from '../../shared/ph-button/ph-icon-button.directive';

@Component({
	selector: 'difficulty',
	templateUrl: './difficulty.component.html',
	styleUrls: ['./difficulty.component.scss'],
	imports: [
		KeyValuePipe,
		PhButtonComponent,
		PhIconButtonDirective,
	],
})
export class DifficultyComponent {
	public readonly EDifficulty = EDifficulty;

	constructor(
    private appService: AppService,
	) { }

	public get numberOfEvidences(): Signal<number> {
		return this.appService.numberOfEvidences;
	}

	public get selectedDifficulty(): WritableSignal<EDifficulty> {
		return this.appService.selectedDifficulty;
	}

	public get selectedEvidences(): WritableSignal<EEvidence[]> {
		return this.appService.selectedEvidences;
	}

	public getClassName = (difficulty: EDifficulty): string => {
		switch (difficulty) {
		case EDifficulty.PROFESSIONAL:
			return 'difficulty--professional';
		case EDifficulty.NIGHTMARE:
			return 'difficulty--nightmare';
		case EDifficulty.INSANITY:
			return 'difficulty--insanity';
		case EDifficulty.APOCALYPSE:
			return 'difficulty--apocalypse';
		}
	};

	public isSelected = (difficulty: EDifficulty): boolean => {
		return this.selectedDifficulty() === difficulty;
	};

	public select = (difficulty: EDifficulty): void => {
		this.selectedDifficulty.set(difficulty);

		if (this.selectedEvidences().length > this.numberOfEvidences()) {
			const difference = this.selectedEvidences().length - this.numberOfEvidences();
			this.selectedEvidences.update(e => e.slice(0, e.length - difference));
		}
	};

	protected keepOrder = (a: unknown, _b: unknown): unknown => {
		return a;
	};
}
