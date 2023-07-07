import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

import { GHOSTS } from './data';
import { Difficulty, Evidence, Ghost, Speed } from './app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly Difficulty = Difficulty;
  public readonly Evidence = Evidence;
  public readonly Speed = Speed;

  public difficultySelection: Difficulty;
  public evidenceSelection: SelectionModel<Evidence>;
  public ghostSelection: SelectionModel<Ghost>;
  public speedSelection: SelectionModel<Speed>;

  private readonly ghosts = GHOSTS;

  constructor() {
    this.difficultySelection = Difficulty.INSANITY;
    this.evidenceSelection = new SelectionModel(true);
    this.speedSelection = new SelectionModel(true);
    this.ghostSelection = new SelectionModel(true);
  }

  public get filteredGhosts(): Ghost[] {
    let filteredGhosts = this.ghosts;

    // If more evidences are visible than the difficulty allows, it has to be a mimic.
    if (this.evidenceSelection.selected.length > this.numberOfEvidence()) {
      filteredGhosts = this.ghosts.filter(g => g.name === 'The Mimic');
    } else {
      filteredGhosts = this.ghosts.filter(g => {
        return this.evidenceSelection.selected.every(s => g.evidences.includes(s));
      });
    }

    // Filter fast ghosts
    if (this.speedSelection.selected.includes(Speed.FAST)) {
      filteredGhosts = filteredGhosts.filter(g => g.huntSpeed.some(s => s > 1.7));
    }

    // Filter normal ghosts
    if (this.speedSelection.selected.includes(Speed.NORMAL)) {
      filteredGhosts = filteredGhosts.filter(g => g.huntSpeed.some(s => s === 1.7));
    }

    // Filter slow ghosts
    if (this.speedSelection.selected.includes(Speed.SLOW)) {
      filteredGhosts = filteredGhosts.filter(g => g.huntSpeed.some(s => s < 1.7));
    }

    return filteredGhosts;
  }

  public isEvidenceDisabled = (evidence: Evidence) => {
    // If evidence is already selected, do not disable
    if (this.evidenceSelection.selected.includes(evidence)) {
      return false;
    }
    // Orbs can always be selected (since this is the special ability of the mimimc)
    if (evidence === Evidence.ORBS) {
      return false;
    }
    // If Orbs are selected, an additional evidence can be selected (max number of evidences + 1 for orbs)
    if (this.evidenceSelection.selected.includes(Evidence.ORBS)) {
      return this.evidenceSelection.selected.length >= this.numberOfEvidence() + 1;
    }
    // If all of the filtered ghosts cannot have this evidence, disable
    if (this.filteredGhosts.map(g => g.evidences).every(e => !e.includes(evidence))) {
      return true;
    }
    // Otherwise, compare number of selected items with max number of allowed evidence (defined by difficulty)
    return this.evidenceSelection.selected.length >= this.numberOfEvidence();
  }

  public isEvidenceSelected = (evidence: Evidence): boolean => {
    return this.evidenceSelection.isSelected(evidence);
  }

  public isGhostSelected = (ghost: Ghost): boolean => {
    return this.ghostSelection.isSelected(ghost);
  }

  public isSpeedSelected = (speed: Speed): boolean => {
    return this.speedSelection.isSelected(speed);
  }

  public numberOfEvidence(): number {
    switch (this.difficultySelection) {
      default:
      case Difficulty.PROFESSIONAL:
        return 3;
      case Difficulty.NIGHTMARE:
        return 2;
      case Difficulty.INSANITY:
        return 1;
      case Difficulty.APOCALYPSE:
        return 0;
    }
  }

  public onChangeDifficulty = () => {
    this.evidenceSelection.selected.forEach(s => this.evidenceSelection.deselect(s));
  }

  public reset = (): void => {
    this.difficultySelection = Difficulty.PROFESSIONAL;
    this.evidenceSelection.clear();
    this.speedSelection.clear();
    this.ghostSelection.clear();
  }

  public toggleEvidenceSelection = (evidence: Evidence) => {
    this.evidenceSelection.toggle(evidence);
  }

  public toggleGhostSelection = (ghost: Ghost) => {
    this.ghostSelection.toggle(ghost);
  }

  public toggleSpeedSelection = (speed: Speed) => {
    this.speedSelection.toggle(speed);
  }
}
