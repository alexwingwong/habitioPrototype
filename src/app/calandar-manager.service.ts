import { Injectable } from '@angular/core';
import { calendar, Day } from './day';
import { BehaviorSubject } from 'rxjs';
//import { CookieService} from "ngx-cookie-service"


@Injectable({
  providedIn: 'root'
})
export class CalandarManagerService {
  private days = new BehaviorSubject(this.loadCookies())
  publicDays = this.days.asObservable();

  lastCalendar = this.loadCookies();

  constructor() { }

  updateDay(newDay: Day, dayIndex: number) {
    this.lastCalendar[dayIndex] = newDay;
    this.days.next(this.lastCalendar);

    let json = JSON.stringify(this.lastCalendar);
    console.log(json)
    localStorage.setItem('jsonData', json)
  }

  loadCookies(): Day[] {
    let x = localStorage.getItem('jsonData')

    if (x == null || x == '') {
      console.log("no cookies found")
      return calendar;
    }
    else {

      let y = JSON.parse(x!);
      console.log(y)
      return y;
    }
  }

  getDay(index: number) {
    console.log("getday()", index)
    if (this.lastCalendar[index]) {
      return this.lastCalendar[index];
    }
    return {
      isDay: false,
      dayNum: -1,
      date: new Date(1900, 0, 1),
      monthIndex: -1,
      mood: -1,
      sleep: -1,
      physicalActivity: -1,
      cssClass: "white"
    }
  }

  clearCalendarAndCookies(){
    localStorage.setItem('jsonData', "");
    this.lastCalendar = calendar;
    this.days = new BehaviorSubject(calendar)
  }
}
