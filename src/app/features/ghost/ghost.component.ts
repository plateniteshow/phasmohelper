import { Component, Signal, WritableSignal } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { GHOSTS } from 'src/app/data';
import { EEvidence, ESpeed, Ghost } from 'src/app/app';
import { BoxComponent } from '../../shared/box/box.component';
import { GhostBoxComponent } from '../../shared/ghost-box/ghost-box.component';

@Component({
    selector: 'ghost',
    templateUrl: './ghost.component.html',
    styleUrls: ['./ghost.component.scss'],
    imports: [BoxComponent, GhostBoxComponent]
})
export class GhostComponent {
  public readonly ghosts: Ghost[] = GHOSTS;

  public get availableGhosts(): Signal<Ghost[]> {
    return this.appService.availableGhosts;
  }

  public get excludedEvidences(): WritableSignal<EEvidence[]> {
    return this.appService.excludedEvidences;
  }

  public get excludedGhosts(): WritableSignal<Ghost[]> {
    return this.appService.excludedGhosts;
  }

  public get excludedSpeeds(): WritableSignal<ESpeed[]> {
    return this.appService.excludedSpeeds
  }

  public get selectedEvidences(): WritableSignal<EEvidence[]> {
    return this.appService.selectedEvidences;
  }

  public get selectedGhost(): WritableSignal<Ghost | undefined> {
    return this.appService.selectedGhost;
  }

  public get selectedSpeeds(): WritableSignal<ESpeed[]> {
    return this.appService.selectedSpeeds;
  }

  constructor(
    private appService: AppService,
  ) { }

  private toggleExcludedGhost = (ghost: Ghost) => {
    // If the ghost is already selected, unselect it
    if (this.selectedGhost() === ghost) {
      this.selectedGhost.set(undefined);
    }

    // Update the excluded ghosts
    this.excludedGhosts.update(e => {
      if (e.includes(ghost)) {
        return e.filter(e => e !== ghost);
      } else {
        return [...e, ghost];
      }
    });
  }

  private toggleSelectedGhost = (ghost: Ghost) => {
    // If the ghost is already excluded, unexclude it
    if (this.excludedGhosts().includes(ghost)) {
      this.excludedGhosts.update(e => e.filter(e => e !== ghost));
    }

    // Update the selected ghost
    this.selectedGhost.update(e => {
      if (e === ghost) {
        return undefined;
      } else {
        return ghost;
      }
    });
  }

  public isActive = (ghost: Ghost) => this.selectedGhost() === ghost;

  public isDisabled = (ghost: Ghost) => !this.availableGhosts().includes(ghost);

  public isIndeterminate = (ghost: Ghost) => this.excludedGhosts().includes(ghost);

  public toggle = (ghost: Ghost, event: MouseEvent) => {
    if (event.shiftKey) {
      this.toggleExcludedGhost(ghost);
    } else {
      this.toggleSelectedGhost(ghost);
    }
  }
}
