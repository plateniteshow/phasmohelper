import { Component, Signal, WritableSignal, effect } from '@angular/core';
import { EEvidence } from 'src/app/app';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'evidence',
  templateUrl: './evidence.component.html',
  styleUrls: ['./evidence.component.scss'],
})
export class EvidenceComponent {
  public readonly EEvidence = EEvidence;

  public get excludedEvidences(): WritableSignal<EEvidence[]> {
    return this.appService.excludedEvidences;
  }

  public get numberOfEvidences(): Signal<number> {
    return this.appService.numberOfEvidences
  }

  public get selectedEvidences(): WritableSignal<EEvidence[]> {
    return this.appService.selectedEvidences;
  }

  constructor(
    private appService: AppService
  ) {
    effect(() => {
      console.log(this.selectedEvidences().length, this.numberOfEvidences());
      if (this.selectedEvidences().length > this.numberOfEvidences()) {
        const difference = this.selectedEvidences().length - this.numberOfEvidences();
        this.selectedEvidences.update(e => e.slice(0, difference));
      }
    }, { allowSignalWrites: true });
  }

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

  public isActive = (evidence: EEvidence) => this.selectedEvidences().includes(evidence);

  public isDisabled = (evidence: EEvidence): boolean => {
    return !this.selectedEvidences().includes(evidence) && this.selectedEvidences().length >= this.numberOfEvidences();
  };

  public isIndeterminate = (evidence: EEvidence) => this.excludedEvidences().includes(evidence);

  public toggle = (evidence: EEvidence, event: MouseEvent) => {
    if (event.shiftKey) {
      // TODO: Excluding evidences should not be possible on higher difficulties.
      this.toggleExcludedEvidence(evidence);
    } else {
      this.toggleSelectedEvidence(evidence);
    }
  }
}
