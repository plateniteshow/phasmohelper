import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Speed } from 'src/app/app';

@Injectable({
  providedIn: 'root'
})
export class SpeedService {
  public readonly speed$: Observable<Speed[]>;

  private speedSource: BehaviorSubject<Speed[]>;

  constructor() {
    this.speedSource = new BehaviorSubject<Speed[]>([]);
    this.speed$ = this.speedSource.asObservable();
  }

  public set speeds(value: Speed[]) {
    this.speedSource.next(value);
  }

  public reset = (): void => {
    this.speeds = [];
  }
}
