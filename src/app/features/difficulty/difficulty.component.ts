import { Component } from '@angular/core';
import { Difficulty } from 'src/app/app';
import { DifficultyService } from './difficulty.service';

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
    private difficultyService: DifficultyService,
  ) {
    this.selectedDifficulty = Difficulty.PROFESSIONAL;
    this.selectedDifficultyIndex = this.getIndex(Difficulty.PROFESSIONAL);

    this.difficultyService.difficulty$.subscribe((difficulty) => {
      this.selectedDifficulty = difficulty;
      this.selectedDifficultyIndex = this.getIndex(difficulty);
    });
  }

  public onChangeDifficulty = (index: number) => {
    const difficulty = Object.values(Difficulty).at(index);
    if (difficulty) {
      this.difficultyService.difficulty = difficulty;
    }
  }

  private getIndex = (difficulty: Difficulty) => {
    return Object.values(Difficulty).indexOf(difficulty);
  }
}
