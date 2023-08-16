import { SelectionModel } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, map, startWith } from 'rxjs';

import { Evidence } from 'src/app/app';

@Injectable({
  providedIn: 'root'
})
export class EvidenceService {
  private readonly _excludedEvidences: SelectionModel<Evidence>;
  private readonly _selectedEvidences: SelectionModel<Evidence>;

  constructor() {
    this._selectedEvidences = new SelectionModel(true);
    this._excludedEvidences = new SelectionModel(true);
  }

  public get excludedEvidences(): Evidence[] {
    return this._excludedEvidences.selected;
  }

  public set excludedEvidences(selectedEvidences: Evidence[]) {
    this._excludedEvidences.setSelection(...selectedEvidences);
  }

  public get excludedEvidences$(): Observable<Evidence[]> {
    return this._excludedEvidences.changed.pipe(
      map(s => s.source.selected),
      startWith(this.excludedEvidences)
    );
  }

  public get selectedEvidences(): Evidence[] {
    return this._selectedEvidences.selected;
  }

  public set selectedEvidences(selectedEvidences: Evidence[]) {
    this._selectedEvidences.setSelection(...selectedEvidences);
  }

  public get selectedEvidences$(): Observable<Evidence[]> {
    return this._selectedEvidences.changed.pipe(
      map(s => s.source.selected),
      startWith(this.selectedEvidences)
    );
  }

  public excludeEvidence = (evidence: Evidence) => {
    if (!this.selectedEvidences.includes(evidence)) {
      this._excludedEvidences.toggle(evidence)
    }
  }

  public selectEvidence = (evidence: Evidence) => {
    if (!this.excludedEvidences.includes(evidence)) {
      this._selectedEvidences.toggle(evidence)
    }
  }
}
