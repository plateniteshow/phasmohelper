import { NgModule } from '@angular/core';

import { BoxComponent } from './box/box.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  imports: [
    BoxComponent,
    CheckboxComponent,
  ],
  exports: [
    BoxComponent,
    CheckboxComponent,
  ],
})
export class SharedModule { }
