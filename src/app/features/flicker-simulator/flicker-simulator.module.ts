import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { FlickerSimulatorComponent } from './flicker-simulator.component';
import { FlickeringIconComponent } from './flickering-icon/flickering-icon.component';

@NgModule({
  declarations: [
    FlickerSimulatorComponent,
    FlickeringIconComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    FlickerSimulatorComponent,
  ]
})
export class FlickerSimulatorModule { }
