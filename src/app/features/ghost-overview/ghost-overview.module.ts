import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GhostOverviewComponent } from './ghost-overview.component';
import { BoxComponent } from 'src/app/shared/box/box.component';

@NgModule({
  declarations: [
    GhostOverviewComponent
  ],
  imports: [
    CommonModule,
    BoxComponent,
  ],
  exports: [
    GhostOverviewComponent,
  ],
})
export class GhostOverviewModule { }
