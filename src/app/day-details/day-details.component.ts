import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Day, calendar} from '../day'

@Component({
  selector: 'app-day-details',
  templateUrl: './day-details.component.html',
  styleUrls: ['./day-details.component.css']
})
export class DayDetailsComponent {

  day: Day | undefined;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const productIDFromRoute = Number(routeParams.get('dayIndex'))

    this.day = calendar[productIDFromRoute];  
  }

}
