import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhostInfoComponent } from './ghost-info.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    GhostInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    GhostInfoComponent,
  ]
})
export class GhostInfoModule { }
