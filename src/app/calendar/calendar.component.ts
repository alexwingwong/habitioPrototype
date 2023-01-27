import { Component } from '@angular/core';
import { calendar, Day } from '../day';
import { CalandarManagerService } from '../calandar-manager.service';
import { Subscription } from 'rxjs';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnDestroy {
  calendar: Day[];
  subsciption: Subscription;

  constructor(private calendarManager: CalandarManagerService){

  }

  ngOnInit(){
    this.subsciption = this.calendarManager.publicDays.subscribe(calendar => this.calendar = calendar);
  }

  ngOnDestroy(){
    this.subsciption.unsubscribe();
  }

  
}
