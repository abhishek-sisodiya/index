import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MaincompComponent } from './maincomp/maincomp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    
    //CommonModule,
    MaincompComponent
  ],
  imports: [
  //  FormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
