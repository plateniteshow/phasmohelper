import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DifficultySelectionComponent } from './difficulty-selection.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DifficultySelectionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    DifficultySelectionComponent,
  ]
})
export class DifficultySelectionModule { }
