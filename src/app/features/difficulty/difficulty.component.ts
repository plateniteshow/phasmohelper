import { Component, Input, OnInit } from '@angular/core';
import { Difficulty } from 'src/app/app';
import { DifficultyService } from './difficulty.service';

@Component({
  selector: 'difficulty',
  templateUrl: './difficulty.component.html',
  styleUrls: ['./difficulty.component.scss']
})
export class DifficultyComponent implements OnInit {
  public readonly Difficulty = Difficulty;

  @Input()
  public defaultDifficulty!: Difficulty;

  constructor(
    private difficultyService: DifficultyService,
  ) { }

  public get selectedDifficulty(): Difficulty {
    return this.difficultyService.selectedDifficulty;
  }

  public isDifficultySelected = (difficulty: Difficulty): boolean => {
    return this.difficultyService.selectedDifficulty === difficulty;
  };

  public ngOnInit(): void {
    this.difficultyService.selectDifficulty(this.defaultDifficulty);
  }

  public onClickDifficulty = (difficulty: Difficulty) => {
    this.difficultyService.selectDifficulty(difficulty);
  }
}
