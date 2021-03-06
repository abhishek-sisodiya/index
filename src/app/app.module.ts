import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MaincompComponent } from './maincomp/maincomp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { MenusModule  } from '@progress/kendo-angular-menu';
import { TextBoxModule } from '@progress/kendo-angular-inputs';


@NgModule({
  declarations: [
    AppComponent,
    MaincompComponent
  ],
  imports: [
    TextBoxModule,
    MenusModule ,
    ButtonsModule,
    CommonModule,
    IntlModule,
    DropDownsModule,
    DatePickerModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
