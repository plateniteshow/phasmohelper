import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxComponent } from 'src/app/shared/box/box.component';

import { SpeedComponent } from './speed.component';

@NgModule({
  declarations: [
    SpeedComponent,
  ],
  imports: [
    CommonModule,
    BoxComponent,
  ],
  exports: [
    SpeedComponent,
  ],
})
export class SpeedModule { }
