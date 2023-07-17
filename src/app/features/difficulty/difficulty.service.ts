import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

import { Difficulty } from "src/app/app";

@Injectable({
  providedIn: 'root'
})
export class DifficultyService {
  public readonly difficulty$: Observable<Difficulty>;

  private difficultySource: BehaviorSubject<Difficulty>;

  constructor() {
    this.difficultySource = new BehaviorSubject<Difficulty>(Difficulty.PROFESSIONAL);
    this.difficulty$ = this.difficultySource.asObservable();
  }

  public get difficulty(): Difficulty {
    return this.difficultySource.value;
  }

  public set difficulty(value: Difficulty) {
    this.difficultySource.next(value);
  }

  public reset = (): void => {
    this.difficulty = Difficulty.PROFESSIONAL;
  }
}
