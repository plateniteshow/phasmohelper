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

  constructor(
    private appService: AppService,
  ) {
    this.selectedDifficulty = this.appService.selectedDifficulty;
  }

  public get selectedDifficulty(): Difficulty {
    return this.appService.selectedDifficulty;
  }

  public set selectedDifficulty(value: Difficulty) {
    this.appService.selectedDifficulty = value;
  }
}
