import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Evidence } from 'src/app/app';

@Injectable({
  providedIn: 'root'
})
export class EvidenceService {
  private evidenceSource: BehaviorSubject<Evidence[]>;
  public readonly evidence$: Observable<Evidence[]>;

  constructor() {
    this.evidenceSource = new BehaviorSubject<Evidence[]>([]);
    this.evidence$ = this.evidenceSource.asObservable();
  }

  public set evidences(value: Evidence[]) {
    this.evidenceSource.next(value);
  }

  public reset = (): void => {
    this.evidences = [];
  }
}
