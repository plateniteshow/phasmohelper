import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxModule } from './box/box.module';

@NgModule({
  imports: [
    CommonModule,
    BoxModule,
  ],
  exports: [BoxModule]
})
export class SharedModule { }
