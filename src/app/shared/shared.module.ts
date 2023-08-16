import { NgModule } from '@angular/core';

import { BoxComponent } from './box/box.component';
import { GhostBoxComponent } from './ghost-box/ghost-box.component';

@NgModule({
  imports: [
    BoxComponent,
    GhostBoxComponent,
  ],
  exports: [
    BoxComponent,
    GhostBoxComponent,
  ],
})
export class SharedModule { }
