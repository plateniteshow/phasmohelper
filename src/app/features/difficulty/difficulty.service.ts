import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

import { NumberOfEvidences } from "./difficulty";

@Injectable({
  providedIn: 'root'
})
export class DifficultyService {
  public readonly numberOfEvidences$: Observable<NumberOfEvidences>;

  private numberOfEvidencesSource: BehaviorSubject<NumberOfEvidences>;

  constructor() {
    this.numberOfEvidencesSource = new BehaviorSubject<NumberOfEvidences>(3);
    this.numberOfEvidences$ = this.numberOfEvidencesSource.asObservable();
  }

  public get numberOfEvidences(): NumberOfEvidences {
    return this.numberOfEvidencesSource.value;
  }

  public set numberOfEvidences(value: NumberOfEvidences) {
    this.numberOfEvidencesSource.next(value);
  }
}
