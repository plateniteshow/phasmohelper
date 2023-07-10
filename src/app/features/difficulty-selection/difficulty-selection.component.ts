import { Component } from '@angular/core';
import { Difficulty } from 'src/app/app';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'difficulty-selection',
  templateUrl: './difficulty-selection.component.html',
  styleUrls: ['./difficulty-selection.component.scss']
})
export class DifficultySelectionComponent {
  public readonly Difficulty = Difficulty;
  public selectedDifficultyIndex: number;

  constructor(
    private appService: AppService,
  ) {
    this.selectedDifficulty = this.appService.selectedDifficulty;
    this.selectedDifficultyIndex = Object.values(Difficulty).indexOf(this.selectedDifficulty);
  }

  public get selectedDifficulty(): Difficulty {
    return this.appService.selectedDifficulty;
  }

  public set selectedDifficulty(value: Difficulty) {
    this.appService.selectedDifficulty = value;
  }

  public onChangeDifficulty = (value: number) => {
    const difficulty = Object.values(Difficulty).at(value);
    if (difficulty) {
      this.appService.selectedDifficulty = difficulty;
    }
  }
}
