import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

import { DifficultyModule } from './features/difficulty/difficulty.module';
import { EvidenceModule } from './features/evidence/evidence.module';
import { GhostInfoModule } from './features/ghost-info/ghost-info.module';
import { GhostModule } from './features/ghost/ghost.module';
import { SmudgeTimerModule } from './features/smudge-timer/smudge-timer.module';
import { SpeedModule } from './features/speed/speed.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    DifficultyModule,
    EvidenceModule,
    FormsModule,
    GhostInfoModule,
    GhostModule,
    ReactiveFormsModule,
    SharedModule,
    SmudgeTimerModule,
    SpeedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
