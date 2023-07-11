import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

import { EvidenceFilterModule } from './features/evidence-filter/evidence-filter.module';
import { SpeedFilterModule } from './features/speed-filter/speed-filter.module';
import { DifficultySelectionModule } from './features/difficulty-selection/difficulty-selection.module';
import { GhostOverviewModule } from './features/ghost-overview/ghost-overview.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    DifficultySelectionModule,
    EvidenceFilterModule,
    FormsModule,
    GhostOverviewModule,
    ReactiveFormsModule,
    SharedModule,
    SpeedFilterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
