import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { DifficultyComponent } from './difficulty.component';

@NgModule({
  declarations: [
    DifficultyComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    DifficultyComponent,
  ]
})
export class DifficultyModule { }
