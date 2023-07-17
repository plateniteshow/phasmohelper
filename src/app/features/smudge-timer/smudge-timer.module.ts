import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmudgeTimerComponent } from './smudge-timer.component';

@NgModule({
  declarations: [
    SmudgeTimerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SmudgeTimerComponent,
  ]
})
export class SmudgeTimerModule { }
