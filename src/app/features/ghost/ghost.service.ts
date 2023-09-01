import { SelectionModel } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { Observable, map, startWith } from 'rxjs';

import { Ghost } from 'src/app/app';
import { GHOSTS } from 'src/app/data';

@Injectable({
  providedIn: 'root'
})
export class GhostService {
  public readonly _excludedGhosts: SelectionModel<Ghost>;

  private readonly _selectableGhosts: SelectionModel<Ghost>;
  private readonly _selectedGhost: SelectionModel<Ghost | undefined>;

  constructor() {
    this._excludedGhosts = new SelectionModel(true);
    this._selectableGhosts = new SelectionModel(true, GHOSTS);
    this._selectedGhost = new SelectionModel(false);
  }

  public get excludedGhosts(): Ghost[] {
    return this._excludedGhosts.selected;
  }

  public set excludedGhosts(excludedGhosts: Ghost[]) {
    this._excludedGhosts.setSelection(...excludedGhosts);
  }

  public get excludedGhosts$(): Observable<Ghost[]> {
    return this._excludedGhosts.changed.pipe(
      map(s => s.source.selected),
      startWith(this.excludedGhosts)
    );
  }

  public get selectableGhosts(): Ghost[] {
    return this._selectableGhosts.selected;
  }

  public set selectableGhosts(selectableGhosts: Ghost[]) {
    this._selectableGhosts.setSelection(...selectableGhosts);
  }

  public get selectableGhosts$(): Observable<Ghost[]> {
    return this._selectableGhosts.changed.pipe(
      map(s => s.source.selected),
      startWith(this.selectableGhosts)
    );
  }

  public get selectedGhost(): Ghost | undefined {
    return this._selectedGhost.selected[0];
  }

  public set selectedGhost(selectedGhost: Ghost | undefined) {
    this._selectedGhost.setSelection(selectedGhost);
  }

  public excludeGhost = (ghost: Ghost) => {
    this._excludedGhosts.toggle(ghost);
  }

  public selectGhost = (ghost: Ghost) => {
    this._selectedGhost.toggle(ghost)
  }
}
