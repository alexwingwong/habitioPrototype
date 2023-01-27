import { Component, OnInit, OnDestroy, AfterViewInit, QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Day, calendar } from '../day'

import { CalandarManagerService } from '../calandar-manager.service';
import { Subscription } from 'rxjs';
import { defaultIfEmpty } from 'rxjs';
import { ɵSharedStylesHost } from '@angular/platform-browser';
import { ViewChild } from '@angular/core';
import { MatChipOption } from '@angular/material/chips';
import { ViewChildren } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

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
  @ViewChildren(MatChipOption) moods: QueryList<MatChipOption>;

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

  ngAfterViewInit() {
    console.log(this.moods);
    this.setMoodChip(this.day.mood.toString())
    this.setSleepChip(this.day.sleep.toString())
    this.setExerciseChip(this.day.physicalActivity.toString())
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

  setMoodChip(input: string) {
    console.log(this.moods);
    let array = this.moods.toArray();
    switch (input) {
      case '1': array[0].selected = true; break;
      case '2': array[1].selected = true; break;
      case '3': array[2].selected = true; break;
      case '4': array[3].selected = true; break;
      case '5': array[4].selected = true; break;
      case '6': array[5].selected = true; break;
      case '7': array[6].selected = true; break;
      default: break;
    }
  }

  setSleepChip(input: string) {
    console.log(this.moods);
    let array = this.moods.toArray();
    switch (input) {
      case '1': array[7].selected = true; break;
      case '2': array[8].selected = true; break;
      case '3': array[9].selected = true; break;
      case '4': array[10].selected = true; break;
      case '5': array[11].selected = true; break;
      case '6': array[12].selected = true; break;
      default: break;
    }
  }

  setExerciseChip(input: string){
    console.log(this.moods);
    let array = this.moods.toArray();
    switch (input) {
      case '1': array[13].selected = true; break;
      case '2': array[14].selected = true; break;
      case '3': array[15].selected = true; break;
      case '4': array[16].selected = true; break;
      default: break;
    }
  }
}
