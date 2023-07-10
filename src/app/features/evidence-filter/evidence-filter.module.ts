import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvidenceFilterComponent } from './evidence-filter.component';
import { CheckboxComponent } from 'src/app/shared/checkbox/checkbox.component';

@NgModule({
  declarations: [
    EvidenceFilterComponent,
  ],
  imports: [
    CommonModule,
    CheckboxComponent,
  ],
  exports: [
    EvidenceFilterComponent,
  ]
})
export class EvidenceFilterModule { }
