import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppService } from './app/app.service';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GhostModule } from './app/features/ghost/ghost.module';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule, BrowserModule, CommonModule, FormsModule, GhostModule, ReactiveFormsModule),
    AppService
  ]
})
  .catch(err => console.error(err));
