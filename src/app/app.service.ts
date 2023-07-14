import { Injectable } from '@angular/core';
import { Speed } from './app';
import { SelectionModel } from '@angular/cdk/collections';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  /** @deprecated move to speedSelectionComponent */
  public readonly speedSelection: SelectionModel<Speed>;

  private _selectedSanity: number = 100;

  constructor() {
    this.speedSelection = new SelectionModel(true);
  }

  // TODO: Bugged
  // if (this.evidenceSelection.selected.includes(Evidence.ORBS)) {
  //   numberOfEvidences += 1;
  // }

  public get selectedSanity(): number {
    return this._selectedSanity;
  }

  public set selectedSanity(value: number) {
    this._selectedSanity = value;
  }

  public get selectedSpeed(): Speed[] {
    return this.speedSelection.selected;
  }

  public reset = (): void => {
    this.speedSelection.clear();
  }
}
