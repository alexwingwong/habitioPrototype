import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { CalendarComponent } from './calendar/calendar.component';
import { DayDetailsComponent } from './day-details/day-details.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayDetailsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
