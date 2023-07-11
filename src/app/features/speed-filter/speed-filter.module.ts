import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxComponent } from 'src/app/shared/box/box.component';

import { SpeedFilterComponent } from './speed-filter.component';

@NgModule({
  declarations: [
    SpeedFilterComponent,
  ],
  imports: [
    CommonModule,
    BoxComponent,
  ],
  exports: [
    SpeedFilterComponent,
  ],
})
export class SpeedFilterModule { }
