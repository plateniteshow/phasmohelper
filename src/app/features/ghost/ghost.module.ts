import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GhostComponent } from './ghost.component';
import { BoxComponent } from 'src/app/shared/box/box.component';

@NgModule({
  declarations: [
    GhostComponent
  ],
  imports: [
    CommonModule,
    BoxComponent,
  ],
  exports: [
    GhostComponent,
  ],
})
export class GhostModule { }
