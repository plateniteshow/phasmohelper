import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhButtonComponent } from './ph-button.component';
import { PhOutlinedButtonDirective } from './ph-outlined-button.directive';
import { PhIconButtonDirective } from './ph-icon-button.directive';

@NgModule({
  declarations: [
    PhButtonComponent,
    PhOutlinedButtonDirective,
    PhIconButtonDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PhButtonComponent,
    PhOutlinedButtonDirective,
    PhIconButtonDirective,
  ]
})
export class PhButtonModule { }
