import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

import { Difficulty, Evidence } from 'src/app/app';
import { DifficultyService } from '../difficulty/difficulty.service';
import { EvidenceService } from './evidence.service';

@Component({
  selector: 'evidence',
  templateUrl: './evidence.component.html',
  styleUrls: ['./evidence.component.scss'],
})
export class EvidenceComponent implements OnInit {
  public readonly Evidence = Evidence;
  public readonly evidenceSelection: SelectionModel<Evidence>;

  private numberOfEvidences: number;

  constructor(
    private difficultyService: DifficultyService,
    private evidenceService: EvidenceService,
  ) {
    this.evidenceSelection = new SelectionModel(true);
    this.numberOfEvidences = 0;

    this.evidenceService.evidence$.subscribe((evidences) => {
      this.evidenceSelection.setSelection(...evidences);
    });
  }

  public isDisabled = (evidence: Evidence) => {
    // If evidence is already selected, do not disable
    if (this.evidenceSelection.selected.includes(evidence)) {
      return false;
    }
    // Otherwise, compare number of selected items with max number of allowed evidence (defined by difficulty)
    return this.evidenceSelection.selected.length >= this.numberOfEvidences;

    // TODO:
    // If all of the filtered ghosts cannot have this evidence, disable
    // if (this.filteredGhosts.map(g => g.evidences).every(e => !e.includes(evidence))) {
    //   return true;
    // }
    // Orbs can always be selected (since this is the special ability of the mimimc)
    // if (this.filteredGhosts.some(g => g.name === "The Mimic") && evidence === Evidence.ORBS) {
    //   return false;
    // }
  }

  public isSelected = (evidence: Evidence): boolean => {
    return this.evidenceSelection.isSelected(evidence);
  }

  public ngOnInit(): void {
    this.subscribeToDifficulty();
  }

  public toggle = (evidence: Evidence) => {
    this.evidenceSelection.toggle(evidence);
    this.evidenceService.evidences = this.evidenceSelection.selected;
  }

  private subscribeToDifficulty = () => {
    this.difficultyService.difficulty$.subscribe(difficulty => {
      switch (difficulty) {
        case Difficulty.PROFESSIONAL:
          this.numberOfEvidences = 3;
          break;
        case Difficulty.NIGHTMARE:
          this.numberOfEvidences = 2;
          break;
        case Difficulty.INSANITY:
          this.numberOfEvidences = 1;
          break;
        case Difficulty.APOCALYPSE:
          this.numberOfEvidences = 0;
          break;
      }

      this.evidenceSelection.selected.forEach(s => {
        if (this.evidenceSelection.selected.length > this.numberOfEvidences) {
          this.evidenceSelection.deselect(s);
        }
      });
    });
  }
}
