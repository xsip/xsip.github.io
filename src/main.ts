import { CommonModule } from '@angular/common';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent,{
  providers: [importProvidersFrom(CommonModule, BrowserModule)],
}).catch(err => console.error(err));
