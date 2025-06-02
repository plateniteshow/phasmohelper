import { Component, Signal, WritableSignal } from '@angular/core';
import { EEvidence } from 'src/app/app';
import { AppService } from 'src/app/app.service';
import { BoxComponent } from '../../shared/box/box.component';
import { KeyValuePipe } from '@angular/common';

@Component({
    selector: 'evidence',
    templateUrl: './evidence.component.html',
    styleUrls: ['./evidence.component.scss'],
    imports: [BoxComponent, KeyValuePipe]
})
export class EvidenceComponent {
  public readonly EEvidence = EEvidence;

  public get excludedEvidences(): WritableSignal<EEvidence[]> {
    return this.appService.excludedEvidences;
  }

  public get numberOfEvidences(): Signal<number> {
    return this.appService.numberOfEvidences;
  }

  public get selectedEvidences(): WritableSignal<EEvidence[]> {
    return this.appService.selectedEvidences;
  }

  constructor(
    private appService: AppService
  ) { }

  private toggleExcludedEvidence = (evidence: EEvidence) => {
    // If the evidence is already selected, unselect it
    if (this.selectedEvidences().includes(evidence)) {
      this.selectedEvidences.update(e => e.filter(e => e !== evidence));
    }

    // Update the excluded evidences
    this.excludedEvidences.update(e => {
      if (e.includes(evidence)) {
        return e.filter(e => e !== evidence);
      } else {
        return [...e, evidence];
      }
    });
  }

  private toggleSelectedEvidence = (evidence: EEvidence) => {
    // If the evidence is already excluded, unexclude it
    if (this.excludedEvidences().includes(evidence)) {
      this.excludedEvidences.update(e => e.filter(e => e !== evidence));
    }

    // Update the selected evidence
    this.selectedEvidences.update(e => {
      if (e.includes(evidence)) {
        return e.filter(e => e !== evidence);
      } else {
        return [...e, evidence];
      }
    });
  }

  // Check if the evidence is active (selected)
  public isActive = (evidence: EEvidence) => this.selectedEvidences().includes(evidence);

  // Check if the evidence is disabled (not selectable)
  public isDisabled = (evidence: EEvidence): boolean =>
    !this.excludedEvidences().includes(evidence) && this.appService.availableGhosts().every(g => !g.evidences.includes(evidence)) ||
    !this.selectedEvidences().includes(evidence) && this.selectedEvidences().length >= this.numberOfEvidences();

  // Check if the evidence is indeterminate (excluded)
  public isIndeterminate = (evidence: EEvidence) => this.excludedEvidences().includes(evidence);

  // Toggle the evidence based on the event (shift key for excluding evidence)
  public toggle = (evidence: EEvidence, event: MouseEvent) => {
    if (event.shiftKey) {
      // TODO: Excluding evidences should not be possible on higher difficulties.
      this.toggleExcludedEvidence(evidence);
    } else {
      this.toggleSelectedEvidence(evidence);
    }
  }
}
