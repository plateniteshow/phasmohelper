import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeedFilterComponent } from './speed-filter.component';
import { CheckboxComponent } from 'src/app/shared/checkbox/checkbox.component';

@NgModule({
  declarations: [
    SpeedFilterComponent,
  ],
  imports: [
    CommonModule,
    CheckboxComponent,
  ],
  exports: [
    SpeedFilterComponent,
  ],
})
export class SpeedFilterModule { }
