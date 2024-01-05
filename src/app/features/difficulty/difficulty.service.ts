import { Injectable } from "@angular/core";
import { Observable, map, startWith } from "rxjs";

import { EDifficulty } from "src/app/app";
import { SelectionModel } from "@angular/cdk/collections";

@Injectable({
  providedIn: 'root'
})
export class DifficultyService {
  private readonly _selectedDifficulty: SelectionModel<EDifficulty>;

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

  public get selectedDifficulty(): EDifficulty {
    return this._selectedDifficulty.selected[0];
  }

  public set selectedDifficulty(selectedDifficulty: EDifficulty) {
    this._selectedDifficulty.setSelection(selectedDifficulty);
  }

  public selectDifficulty = (difficulty: EDifficulty) => {
    this._selectedDifficulty.select(difficulty);
  }

  private getNumberOfEvidences = (difficulty: EDifficulty): number => {
    switch (difficulty) {
      case EDifficulty.PROFESSIONAL: return 3;
      case EDifficulty.NIGHTMARE: return 2;
      case EDifficulty.INSANITY: return 1;
      case EDifficulty.APOCALYPSE:
      default:
        return 0;
    }
  }
}
