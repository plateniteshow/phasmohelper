import { Component, Signal, WritableSignal } from '@angular/core';
import { EDifficulty, EEvidence } from 'src/app/app';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'difficulty',
  templateUrl: './difficulty.component.html',
  styleUrls: ['./difficulty.component.scss']
})
export class DifficultyComponent {
  public readonly EDifficulty = EDifficulty;

  public get numberOfEvidences(): Signal<number> {
    return this.appService.numberOfEvidences;
  }

  public get selectedDifficulty(): WritableSignal<EDifficulty> {
    return this.appService.selectedDifficulty;
  }

  public get selectedEvidences(): WritableSignal<EEvidence[]> {
    return this.appService.selectedEvidences;
  }

  constructor(
    private appService: AppService,
  ) { }

  protected keepOrder = (a: any, _b: any) => {
    return a;
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
  }

  public isSelected = (difficulty: EDifficulty): boolean => {
    return this.selectedDifficulty() === difficulty;
  }

  public select = (difficulty: EDifficulty): void => {
    this.selectedDifficulty.set(difficulty);

    if (this.selectedEvidences().length > this.numberOfEvidences()) {
      const difference = this.selectedEvidences().length - this.numberOfEvidences();
      this.selectedEvidences.update(e => e.slice(0, e.length - difference));
    }
  }
}
