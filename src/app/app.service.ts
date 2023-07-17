import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public readonly reset$: Observable<void>;

  private resetSource: Subject<void>;

  constructor() {
    this.resetSource = new Subject<void>();
    this.reset$ = this.resetSource.asObservable();
  }

  public reset = (): void => {
    this.resetSource.next();
  }
}
