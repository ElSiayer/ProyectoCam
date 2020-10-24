import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MediaCapture } from "@ionic-native/media-capture/ngx";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    //,    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,MatButtonModule,
    MatIconModule,
    MatCardModule,MatFormFieldModule,
    CarouselModule,
    WavesModule,MatButtonModule,MatIconModule,MatCardModule,MatFormFieldModule,CarouselModule,FormsModule, NgImageSliderModule
  ],exports:[MatButtonModule,MatIconModule,MatCardModule,MatFormFieldModule,CarouselModule,
    WavesModule],
  providers: [MediaCapture],
  bootstrap: [AppComponent]
})
export class AppModule { }
