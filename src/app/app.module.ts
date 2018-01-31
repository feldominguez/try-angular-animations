import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';

import {
  MatMenuModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDialogModule,
  MatProgressBarModule,
  MatTableModule,
  MatDialogContent,
  MatIconRegistry,
  MatIcon,
  MatTabsModule,
  MatChipsModule,
  MatSelectModule,
  MatIconBase,
  MatLineModule,
  MatCommonModule,
  MatButtonToggleModule,
  MatOptionModule,
  MatListSubheaderCssMatStyler,
  MatGridListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatRadioModule
} from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { StaggerComponent } from './stagger/stagger.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [AppComponent, StaggerComponent, MainComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTooltipModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatChipsModule,
    MatTabsModule,
    MatRippleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
