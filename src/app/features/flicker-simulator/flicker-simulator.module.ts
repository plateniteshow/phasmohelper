import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlickerSimulatorComponent } from './flicker-simulator.component';
import { FlickeringIconComponent } from './flickering-icon/flickering-icon.component';

@NgModule({
  declarations: [
    FlickerSimulatorComponent,
    FlickeringIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlickerSimulatorComponent,
  ]
})
export class FlickerSimulatorModule { }
