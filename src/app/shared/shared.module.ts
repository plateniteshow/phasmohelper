import { NgModule } from '@angular/core';

import { CrtWrapperComponent } from './crt-wrapper/crt-wrapper.component';
import { BoxComponent } from './box/box.component';

@NgModule({
  imports: [
    BoxComponent,
    CrtWrapperComponent,
  ],
  exports: [
    BoxComponent,
    CrtWrapperComponent,
  ],
})
export class SharedModule { }
