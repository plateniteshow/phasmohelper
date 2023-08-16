import { SelectionModel } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { Observable, map, startWith } from 'rxjs';
import { Speed } from 'src/app/app';

@Injectable({
  providedIn: 'root'
})
export class SpeedService {
  private readonly _excludedSpeeds: SelectionModel<Speed>;
  private readonly _selectedSpeeds: SelectionModel<Speed>;

  constructor() {
    this._excludedSpeeds = new SelectionModel(true);
    this._selectedSpeeds = new SelectionModel(true);
  }

  public get excludedSpeeds(): Speed[] {
    return this._excludedSpeeds.selected;
  }

  public set excludedSpeeds(selectedSpeeds: Speed[]) {
    this._excludedSpeeds.setSelection(...selectedSpeeds);
  }

  public get excludedSpeeds$(): Observable<Speed[]> {
    return this._excludedSpeeds.changed.pipe(
      map(s => s.source.selected),
      startWith(this.excludedSpeeds)
    );
  }

  public get selectedSpeeds(): Speed[] {
    return this._selectedSpeeds.selected;
  }

  public set selectedSpeeds(selectedSpeeds: Speed[]) {
    this._selectedSpeeds.setSelection(...selectedSpeeds);
  }

  public get selectedSpeeds$(): Observable<Speed[]> {
    return this._selectedSpeeds.changed.pipe(
      map(s => s.source.selected),
      startWith(this.selectedSpeeds)
    );
  }

  public excludeSpeed = (speed: Speed) => {
    if (!this.selectedSpeeds.includes(speed)) {
      this._excludedSpeeds.toggle(speed)
    }
  }

  public selectSpeed = (speed: Speed) => {
    if (!this.excludedSpeeds.includes(speed)) {
      this._selectedSpeeds.toggle(speed)
    }
  }
}
