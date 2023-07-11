import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvidenceFilterComponent } from './evidence-filter.component';
import { BoxComponent } from 'src/app/shared/box/box.component';

@NgModule({
  declarations: [
    EvidenceFilterComponent,
  ],
  imports: [
    CommonModule,
    BoxComponent,
  ],
  exports: [
    EvidenceFilterComponent,
  ]
})
export class EvidenceFilterModule { }
