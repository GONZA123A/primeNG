import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { AppComponent } from '../app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    FormsModule,
    AppComponent,
    HttpClientModule
    
  ],
  exports: [
    
  ]
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }