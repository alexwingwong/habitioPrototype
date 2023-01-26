import { Component } from '@angular/core';
import { calendar } from '../day';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  calendar = calendar;
  
}
