import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { MenuModule } from 'primeng/menu';
import { CheckboxModule } from 'primeng/checkbox';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    TabViewModule,
    ButtonModule,
    DropdownModule,
    TooltipModule,
    MenuModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CheckboxModule,
    AutoCompleteModule,
    CalendarModule,
    InputTextModule,
    ReactiveFormsModule,
    DialogModule,
  ],
  declarations: [AppComponent, PopupDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
