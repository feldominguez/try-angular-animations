import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  MatTabsModule,
  MatChipsModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatOptionModule,
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
import { RedditDataService } from './shared/reddit-data.service';
import { OverviewComponent } from './overview/overview.component';
import { FadeComponent } from './fade/fade.component';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    StaggerComponent,
    MainComponent,
    OverviewComponent,
    FadeComponent
  ],
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
    MatChipsModule,
    ScrollDispatchModule
  ],
  providers: [RedditDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
