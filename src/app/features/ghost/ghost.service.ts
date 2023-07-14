import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Ghost } from 'src/app/app';
import { GHOSTS } from 'src/app/data';

@Injectable({
  providedIn: 'root'
})
export class GhostService {
  public readonly ghosts$: Observable<Ghost[]>;
  public readonly selectedGhost$: Observable<Ghost | undefined>;

  private ghostsSource: BehaviorSubject<Ghost[]>;
  private selectedGhostSource: BehaviorSubject<Ghost | undefined>;

  constructor() {
    this.ghostsSource = new BehaviorSubject<Ghost[]>(GHOSTS);
    this.ghosts$ = this.ghostsSource.asObservable();

    this.selectedGhostSource = new BehaviorSubject<Ghost | undefined>(undefined);
    this.selectedGhost$ = this.selectedGhostSource.asObservable();
  }

  public set ghosts(ghosts: Ghost[]) {
    this.ghostsSource.next(ghosts);
  }

  public get selectedGhost(): Ghost | undefined {
    return this.selectedGhostSource.value;
  }

  public set selectedGhost(ghost: Ghost | undefined) {
    this.selectedGhostSource.next(ghost);
  }

  // public reset = (): void => {
  //   this.ghosts = GHOSTS;
  // }
}
