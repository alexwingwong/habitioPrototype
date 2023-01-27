import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Day, calendar } from '../day'

import { CalandarManagerService } from '../calandar-manager.service';
import { Subscription } from 'rxjs';
import { defaultIfEmpty } from 'rxjs';

@Component({
  selector: 'app-day-details',
  templateUrl: './day-details.component.html',
  styleUrls: ['./day-details.component.css'],
  host: {
    role: ''
  }
})
export class DayDetailsComponent implements OnInit, OnDestroy {

  calendar: Day[]
  day: Day;
  index: number;
  subscription: Subscription;
  newDay: Day;

  constructor(private route: ActivatedRoute, private calendarManager: CalandarManagerService) {

  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIDFromRoute = Number(routeParams.get('dayIndex'))

    this.day = calendar[productIDFromRoute];
    this.index = this.day.monthIndex;

    this.newDay = {
      isDay: this.day.isDay,
      dayNum: this.day.dayNum,
      date: this.day.date,
      monthIndex: this.day.monthIndex,
      mood: this.day.mood,
      sleep: this.day.sleep,
      physicalActivity: this.day.physicalActivity,
      cssClass: 'grey'
    }

    this.subscription = this.calendarManager.publicDays.subscribe(calendar => this.calendar = calendar);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateDay() {

    console.log(this.newDay)
    this.calendarManager.updateDay(this.newDay, this.newDay.monthIndex);
  }

  updateExercise(event: any) {
    console.log("Exercise:", event.source.value)
    this.newDay.physicalActivity = event.source.value;
  }

  updateSleep(event: any) {
    console.log("Sleep:", event.source.value)
    this.newDay.sleep = event.source.value;
  }

  updateMood(event: any) {
    console.log("Mood:", event.source.value)
    this.newDay.mood = event.source.value;

    switch (event.source.value) {
      case '1': this.newDay.cssClass = "darkRed"; break;
      case '2': this.newDay.cssClass = "darkRed"; break;
      case '3': this.newDay.cssClass = "lightRed"; break;
      case '4': this.newDay.cssClass = "beige"; break;
      case '5': this.newDay.cssClass = "lightGreen"; break;
      case '6': this.newDay.cssClass = "darkGreen"; break;
      case '7': this.newDay.cssClass = "darkGreen"; break;
      default: this.newDay.cssClass = "grey"; break;
    }

    console.log(this.newDay.cssClass)
  }
}
