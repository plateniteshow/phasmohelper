import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvidenceComponent } from './evidence.component';
import { BoxComponent } from 'src/app/shared/box/box.component';

@NgModule({
  declarations: [
    EvidenceComponent,
  ],
  imports: [
    CommonModule,
    BoxComponent,
  ],
  exports: [
    EvidenceComponent,
  ]
})
export class EvidenceModule { }
