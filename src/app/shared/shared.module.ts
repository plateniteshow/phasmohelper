import { NgModule } from '@angular/core';

import { BoxComponent } from './box/box.component';
import { GhostBoxComponent } from './ghost-box/ghost-box.component';
import { PhButtonModule } from './ph-button/ph-button.module';

@NgModule({
  imports: [
    BoxComponent,
    GhostBoxComponent,
    PhButtonModule,
  ],
  exports: [
    BoxComponent,
    GhostBoxComponent,
    PhButtonModule,
  ],
})
export class SharedModule { }
