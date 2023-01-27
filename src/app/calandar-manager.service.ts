import { Injectable } from '@angular/core';
import { calendar, Day } from './day';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalandarManagerService {

  private days = new BehaviorSubject(calendar)
  publicDays = this.days.asObservable();

  lastCalendar = calendar;

  constructor() { }

  updateDay(newDay: Day, dayIndex: number){
    this.lastCalendar[dayIndex] = newDay;
    this.days.next(this.lastCalendar);
  }
}
