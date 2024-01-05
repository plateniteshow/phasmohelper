import { Component, Input, OnInit } from '@angular/core';
import { EDifficulty } from 'src/app/app';
import { DifficultyService } from './difficulty.service';

@Component({
  selector: 'difficulty',
  templateUrl: './difficulty.component.html',
  styleUrls: ['./difficulty.component.scss']
})
export class DifficultyComponent implements OnInit {
  public readonly Difficulty = EDifficulty;

  @Input()
  public defaultDifficulty!: EDifficulty;

  constructor(
    private difficultyService: DifficultyService,
  ) { }

  public get selectedDifficulty(): EDifficulty {
    return this.difficultyService.selectedDifficulty;
  }

  public isDifficultySelected = (difficulty: EDifficulty): boolean => {
    return this.difficultyService.selectedDifficulty === difficulty;
  };

  public ngOnInit(): void {
    this.difficultyService.selectDifficulty(this.defaultDifficulty);
  }

  public onClickDifficulty = (difficulty: EDifficulty) => {
    this.difficultyService.selectDifficulty(difficulty);
  }
}
