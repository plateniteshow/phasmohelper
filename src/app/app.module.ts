import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

import { DifficultyModule } from './features/difficulty/difficulty.module';
import { EvidenceModule } from './features/evidence/evidence.module';
import { FlickerSimulatorModule } from './features/flicker-simulator/flicker-simulator.module';
import { GhostModule } from './features/ghost/ghost.module';
import { SmudgeTimerModule } from './features/smudge-timer/smudge-timer.module';
import { SpeedModule } from './features/speed/speed.module';
import { AppService } from './app.service';

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
    FlickerSimulatorModule,
    FormsModule,
    GhostModule,
    ReactiveFormsModule,
    SharedModule,
    SmudgeTimerModule,
    SpeedModule,
  ],
  providers: [
    AppService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
