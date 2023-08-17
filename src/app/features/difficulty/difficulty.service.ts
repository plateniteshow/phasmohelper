import { Injectable } from "@angular/core";
import { Observable, map, startWith } from "rxjs";

import { Difficulty } from "src/app/app";
import { SelectionModel } from "@angular/cdk/collections";

@Injectable({
  providedIn: 'root'
})
export class DifficultyService {
  private readonly _selectedDifficulty: SelectionModel<Difficulty>;

  constructor() {
    this._selectedDifficulty = new SelectionModel(false);
  }

  public get numberOfEvidences$(): Observable<number> {
    return this._selectedDifficulty.changed.pipe(
      map(s => {
        return this.getNumberOfEvidences(s.source.selected[0]);
      }),
      startWith(this.getNumberOfEvidences(this.selectedDifficulty))
    );
  }

  public get selectedDifficulty(): Difficulty {
    return this._selectedDifficulty.selected[0];
  }

  public set selectedDifficulty(selectedDifficulty: Difficulty) {
    this._selectedDifficulty.setSelection(selectedDifficulty);
  }

  public selectDifficulty = (difficulty: Difficulty) => {
    this._selectedDifficulty.select(difficulty);
  }

  private getNumberOfEvidences = (difficulty: Difficulty): number => {
    switch (difficulty) {
      case Difficulty.PROFESSIONAL: return 3;
      case Difficulty.NIGHTMARE: return 2;
      case Difficulty.INSANITY: return 1;
      case Difficulty.APOCALYPSE:
      default:
        return 0;
    }
  }
}
