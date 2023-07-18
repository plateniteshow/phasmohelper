import { Component, OnDestroy } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Subscription } from 'rxjs';

import { Evidence, Ghost } from 'src/app/app';

import { DifficultyService } from '../difficulty/difficulty.service';
import { EvidenceService } from './evidence.service';
import { AppService } from 'src/app/app.service';
import { GhostService } from '../ghost/ghost.service';

@Component({
  selector: 'evidence',
  templateUrl: './evidence.component.html',
  styleUrls: ['./evidence.component.scss'],
})
export class EvidenceComponent implements OnDestroy {
  public readonly Evidence = Evidence;
  public readonly evidenceSelection: SelectionModel<Evidence>;

  private ghosts: Ghost[];
  private numberOfEvidences: number;
  private numberOfEvidences$: Subscription;

  constructor(
    private appService: AppService,
    private difficultyService: DifficultyService,
    private evidenceService: EvidenceService,
    private ghostService: GhostService,
  ) {
    this.evidenceSelection = new SelectionModel(true);
    this.ghosts = [];
    this.numberOfEvidences = 3;

    this.numberOfEvidences$ = this.difficultyService.numberOfEvidences$.subscribe(numberOfEvidences => {
      this.numberOfEvidences = numberOfEvidences;

      this.evidenceSelection.selected.forEach(s => {
        if (this.evidenceSelection.selected.length > this.numberOfEvidences) {
          this.evidenceSelection.deselect(s);
          this.evidenceService.evidences = this.evidenceSelection.selected;
        }
      });

    });

    this.ghostService.ghosts$.subscribe(ghosts => {
      this.ghosts = ghosts;
    });

    this.appService.reset$.subscribe(() => {
      this.evidenceSelection.clear();
      this.evidenceService.evidences = [];
    });
  }

  public isDisabled = (evidence: Evidence) => {
    // If evidence is already selected, do not disable
    if (this.evidenceSelection.selected.includes(evidence)) {
      return false;
    }

    // If all of the filtered ghosts cannot have this evidence, disable
    if (this.ghosts.map(g => g.evidences).every(e => !e.includes(evidence))) {
      return true;
    }

    // If evidence is orbs, do not disable
    if (this.ghosts.map(g => g.name).includes('The Mimic') && evidence === Evidence.ORBS) {
      return false;
    }

    // Otherwise, compare number of selected items with max number of allowed evidence (defined by difficulty)
    return this.evidenceSelection.selected.length >= this.numberOfEvidences;
  }

  public isSelected = (evidence: Evidence): boolean => {
    return this.evidenceSelection.isSelected(evidence);
  }

  public ngOnDestroy(): void {
    this.numberOfEvidences$.unsubscribe();
  }

  public toggle = (evidence: Evidence) => {
    this.evidenceSelection.toggle(evidence);
    this.evidenceService.evidences = this.evidenceSelection.selected;
  }
}
