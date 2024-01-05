import { SelectionModel } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { Observable, map, startWith } from 'rxjs';
import { ESpeed } from 'src/app/app';

@Injectable({
  providedIn: 'root'
})
export class SpeedService {
  private readonly _excludedSpeeds: SelectionModel<ESpeed>;
  private readonly _selectedSpeeds: SelectionModel<ESpeed>;

  constructor() {
    this._excludedSpeeds = new SelectionModel(true);
    this._selectedSpeeds = new SelectionModel(true);
  }

  public get excludedSpeeds(): ESpeed[] {
    return this._excludedSpeeds.selected;
  }

  public set excludedSpeeds(selectedSpeeds: ESpeed[]) {
    this._excludedSpeeds.setSelection(...selectedSpeeds);
  }

  public get excludedSpeeds$(): Observable<ESpeed[]> {
    return this._excludedSpeeds.changed.pipe(
      map(s => s.source.selected),
      startWith(this.excludedSpeeds)
    );
  }

  public get selectedSpeeds(): ESpeed[] {
    return this._selectedSpeeds.selected;
  }

  public set selectedSpeeds(selectedSpeeds: ESpeed[]) {
    this._selectedSpeeds.setSelection(...selectedSpeeds);
  }

  public get selectedSpeeds$(): Observable<ESpeed[]> {
    return this._selectedSpeeds.changed.pipe(
      map(s => s.source.selected),
      startWith(this.selectedSpeeds)
    );
  }

  public excludeSpeed = (speed: ESpeed) => {
    if (!this.selectedSpeeds.includes(speed)) {
      this._excludedSpeeds.toggle(speed)
    }
  }

  public selectSpeed = (speed: ESpeed) => {
    if (!this.excludedSpeeds.includes(speed)) {
      this._selectedSpeeds.toggle(speed)
    }
  }
}
