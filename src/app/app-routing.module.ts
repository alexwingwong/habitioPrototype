import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { DayDetailsComponent } from './day-details/day-details.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: CalendarComponent},
  {path: 'calendar/:dayIndex', component: DayDetailsComponent },
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
