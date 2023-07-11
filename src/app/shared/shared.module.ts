import { NgModule } from '@angular/core';

import { BoxComponent } from './box/box.component';

@NgModule({
  imports: [
    BoxComponent,
  ],
  exports: [
    BoxComponent,
  ],
})
export class SharedModule { }
