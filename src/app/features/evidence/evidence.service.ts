import { SelectionModel } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, map, startWith } from 'rxjs';

import { EEvidence } from 'src/app/app';

@Injectable({
  providedIn: 'root'
})
export class EvidenceService {
  private readonly _excludedEvidences: SelectionModel<EEvidence>;
  private readonly _selectedEvidences: SelectionModel<EEvidence>;

  constructor() {
    this._selectedEvidences = new SelectionModel(true);
    this._excludedEvidences = new SelectionModel(true);
  }

  public get excludedEvidences(): EEvidence[] {
    return this._excludedEvidences.selected;
  }

  public set excludedEvidences(selectedEvidences: EEvidence[]) {
    this._excludedEvidences.setSelection(...selectedEvidences);
  }

  public get excludedEvidences$(): Observable<EEvidence[]> {
    return this._excludedEvidences.changed.pipe(
      map(s => s.source.selected),
      startWith(this.excludedEvidences)
    );
  }

  public get selectedEvidences(): EEvidence[] {
    return this._selectedEvidences.selected;
  }

  public set selectedEvidences(selectedEvidences: EEvidence[]) {
    this._selectedEvidences.setSelection(...selectedEvidences);
  }

  public get selectedEvidences$(): Observable<EEvidence[]> {
    return this._selectedEvidences.changed.pipe(
      map(s => s.source.selected),
      startWith(this.selectedEvidences)
    );
  }

  public excludeEvidence = (evidence: EEvidence) => {
    if (!this.selectedEvidences.includes(evidence)) {
      this._excludedEvidences.toggle(evidence)
    }
  }

  public selectEvidence = (evidence: EEvidence) => {
    if (!this.excludedEvidences.includes(evidence)) {
      this._selectedEvidences.toggle(evidence)
    }
  }
}
