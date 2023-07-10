import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

import { Evidence } from 'src/app/app';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'evidence-filter',
  templateUrl: './evidence-filter.component.html',
  styleUrls: ['./evidence-filter.component.scss'],
})
export class EvidenceFilterComponent {
  public readonly Evidence = Evidence;

  constructor(
    private appService: AppService,
  ) { }

  public isEvidenceDisabled = (evidence: Evidence): boolean => {
    return this.appService.isEvidenceDisabled(evidence);
  }

  public isEvidenceSelected = (evidence: Evidence): boolean => {
    return this.appService.evidenceSelection.isSelected(evidence);
  }

  public toggleEvidenceSelection = (evidence: Evidence) => {
    this.appService.evidenceSelection.toggle(evidence);
  }
}
