import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GhostComponent } from './ghost.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    GhostComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    GhostComponent,
  ],
})
export class GhostModule { }
