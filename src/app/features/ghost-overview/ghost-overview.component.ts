import { Component } from '@angular/core';
import { Ghost } from 'src/app/app';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'ghost-overview',
  templateUrl: './ghost-overview.component.html',
  styleUrls: ['./ghost-overview.component.scss']
})
export class GhostOverviewComponent {
  constructor(
    private appService: AppService,
  ) { }

  public get filteredGhosts(): Ghost[] {
    return this.appService.filteredGhosts;
  }

  public isGhostSelected = (ghost: Ghost): boolean => {
    return this.appService.ghostSelection.isSelected(ghost);
  }

  public toggleGhostSelection = (ghost: Ghost) => {
    this.appService.ghostSelection.toggle(ghost);
  }
}
