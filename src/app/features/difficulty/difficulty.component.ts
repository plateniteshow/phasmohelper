import { Component } from '@angular/core';
import { Difficulty } from 'src/app/app';
import { DifficultyService } from './difficulty.service';
import { NumberOfEvidences } from './difficulty';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'difficulty',
  templateUrl: './difficulty.component.html',
  styleUrls: ['./difficulty.component.scss']
})
export class DifficultyComponent {
  public readonly Difficulty = Difficulty;

  public selectedDifficulty: Difficulty;
  public selectedDifficultyIndex: number;

  constructor(
    private appService: AppService,
    private difficultyService: DifficultyService,
  ) {
    this.selectedDifficulty = Difficulty.PROFESSIONAL;
    this.selectedDifficultyIndex = this.getIndex(this.selectedDifficulty);

    this.appService.reset$.subscribe(() => {
      this.selectedDifficulty = Difficulty.PROFESSIONAL;
      this.selectedDifficultyIndex = this.getIndex(this.selectedDifficulty);
      this.getNumberOfEvidences();
    });
  }

  public onChangeDifficulty = (index: number) => {
    const difficulty = Object.values(Difficulty).at(index);
    if (difficulty) {
      this.selectedDifficulty = difficulty;
      this.selectedDifficultyIndex = this.getIndex(difficulty);
      this.getNumberOfEvidences();
    }
  }

  private getIndex = (difficulty: Difficulty) => {
    return Object.values(Difficulty).indexOf(difficulty);
  }

  private getNumberOfEvidences = () => {
    let numberOfEvidences: NumberOfEvidences;

    switch (this.selectedDifficulty) {
      case Difficulty.APOCALYPSE:
        numberOfEvidences = 0;
        break;
      case Difficulty.INSANITY:
        numberOfEvidences = 1;
        break;
      case Difficulty.NIGHTMARE:
        numberOfEvidences = 2;
        break;
      case Difficulty.PROFESSIONAL:
      default:
        numberOfEvidences = 3;
        break;
    }

    this.difficultyService.numberOfEvidences = numberOfEvidences;
  }
}
