import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DifficultyComponent } from './difficulty.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DifficultyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    DifficultyComponent,
  ]
})
export class DifficultyModule { }
