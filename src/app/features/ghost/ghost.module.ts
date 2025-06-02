import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GhostComponent } from './ghost.component';

import { GhostService } from './ghost.service';

@NgModule({
    imports: [
    CommonModule,
    GhostComponent,
],
    exports: [
        GhostComponent,
    ],
    providers: [
        GhostService,
    ],
})
export class GhostModule { }
