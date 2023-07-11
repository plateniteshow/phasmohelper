import { Injectable } from '@angular/core';
import { Difficulty, Evidence, Ghost, Speed } from './app';
import { SelectionModel } from '@angular/cdk/collections';
import { GHOSTS } from './data';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public readonly evidenceSelection: SelectionModel<Evidence>;
  public readonly ghostSelection: SelectionModel<Ghost>;
  public readonly speedSelection: SelectionModel<Speed>;

  private readonly ghosts = GHOSTS;

  private _selectedDifficulty: Difficulty = Difficulty.INSANITY;
  private _selectedSanity: number = 100;

  constructor() {
    this.evidenceSelection = new SelectionModel(true);
    this.ghostSelection = new SelectionModel(false);
    this.speedSelection = new SelectionModel(true);
  }

  public get filteredGhosts(): Ghost[] {
    let filteredGhosts = this.ghosts;

    // Filter all ghosts by selected evidences
    filteredGhosts = this.ghosts.filter(g => {
      return this.selectedEvidences.every(s => g.evidences.includes(s));
    });

    // If all possible evidences are selected, filter out all ghosts that have a forced evidence which was not selected
    if (this.selectedEvidences.length === this.numberOfEvidences) {
      filteredGhosts = filteredGhosts.filter(g => {
        if (g.forcedEvidence) {
          return this.selectedEvidences.includes(g.forcedEvidence);
        }
        return true;
      });
    }

    // Filter fast ghosts
    if (this.selectedSpeed.includes(Speed.FAST)) {
      filteredGhosts = filteredGhosts.filter(g => g.huntSpeed.some(s => s > 1.7));
    }

    // Filter normal ghosts
    if (this.selectedSpeed.includes(Speed.NORMAL)) {
      filteredGhosts = filteredGhosts.filter(g => g.huntSpeed.some(s => s === 1.7));
    }

    // Filter slow ghosts
    if (this.selectedSpeed.includes(Speed.SLOW)) {
      filteredGhosts = filteredGhosts.filter(g => g.huntSpeed.some(s => s < 1.7));
    }

    return filteredGhosts;
  }

  public get numberOfEvidences(): number {
    let numberOfEvidences = 0;
    switch (this.selectedDifficulty) {
      default:
      case Difficulty.PROFESSIONAL:
        numberOfEvidences = 3;
        break;
      case Difficulty.NIGHTMARE:
        numberOfEvidences = 2;
        break;
      case Difficulty.INSANITY:
        numberOfEvidences = 1;
        break;
      case Difficulty.APOCALYPSE:
        numberOfEvidences = 0;
        break;
    }

    // TODO: Bugged
    // if (this.evidenceSelection.selected.includes(Evidence.ORBS)) {
    //   numberOfEvidences += 1;
    // }

    return numberOfEvidences;
  }

  public get selectedDifficulty(): Difficulty {
    return this._selectedDifficulty;
  }

  public set selectedDifficulty(value: Difficulty) {
    this._selectedDifficulty = value;

    switch (value) {
      case Difficulty.INSANITY:
        this.selectedSanity = 75;
        break;
      default:
        this.selectedSanity = 100;
        break;
    }

    this.evidenceSelection.selected.forEach(s => {
      if (this.evidenceSelection.selected.length > this.numberOfEvidences) {
        this.evidenceSelection.deselect(s);
      }
    });
  }

  public get selectedEvidences(): Evidence[] {
    return this.evidenceSelection.selected;
  }

  public get selectedSanity(): number {
    return this._selectedSanity;
  }

  public set selectedSanity(value: number) {
    this._selectedSanity = value;
  }

  public get selectedSpeed(): Speed[] {
    return this.speedSelection.selected;
  }

  public isEvidenceDisabled = (evidence: Evidence) => {
    // If evidence is already selected, do not disable
    if (this.selectedEvidences.includes(evidence)) {
      return false;
    }
    // If all of the filtered ghosts cannot have this evidence, disable
    if (this.filteredGhosts.map(g => g.evidences).every(e => !e.includes(evidence))) {
      return true;
    }
    // Orbs can always be selected (since this is the special ability of the mimimc)
    // TODO: Bugged
    // if (this.filteredGhosts.some(g => g.name === "The Mimic") && evidence === Evidence.ORBS) {
    //   return false;
    // }
    // Otherwise, compare number of selected items with max number of allowed evidence (defined by difficulty)
    return this.selectedEvidences.length >= this.numberOfEvidences;
  }

  public reset = (): void => {
    this.selectedDifficulty = Difficulty.INSANITY;
    this.evidenceSelection.clear();
    this.ghostSelection.clear();
    this.speedSelection.clear();
  }
}
