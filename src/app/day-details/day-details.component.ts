import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Day, calendar } from '../day'

import { CalandarManagerService } from '../calandar-manager.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-day-details',
  templateUrl: './day-details.component.html',
  styleUrls: ['./day-details.component.css']
})
export class DayDetailsComponent implements OnInit, OnDestroy {

  calendar: Day[]
  day: Day;
  index: number;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private calendarManager: CalandarManagerService) {

  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIDFromRoute = Number(routeParams.get('dayIndex'))

    this.day = calendar[productIDFromRoute];
    this.index = this.day.monthIndex;

    this.subscription = this.calendarManager.publicDays.subscribe(calendar => this.calendar = calendar);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateDay() {
    let newDay = {
      isDay: this.day.isDay,
      dayNum: this.day.dayNum,
      date: this.day.date,
      monthIndex: this.day.monthIndex,
      mood: 2,
      sleep: 2,
      physicalActivity: 2,
      cssClass: 'lightRed'
    }
    this.calendarManager.updateDay(newDay, newDay.monthIndex);
  }

}
