import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { SmudgeTimerComponent } from './smudge-timer.component';

@NgModule({
  declarations: [
    SmudgeTimerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    SmudgeTimerComponent,
  ]
})
export class SmudgeTimerModule { }
