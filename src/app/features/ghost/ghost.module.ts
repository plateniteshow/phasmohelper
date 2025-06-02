import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GhostComponent } from './ghost.component';
import { GhostService } from './ghost.service';

@NgModule({
	imports: [
		CommonModule, GhostComponent,
	],
	exports: [
		GhostComponent,
	],
	providers: [
		GhostService,
	],
})
export class GhostModule { }
