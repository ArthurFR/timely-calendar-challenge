import { Component, OnInit } from '@angular/core';
import { CalendarInfo } from 'src/app/core/interfaces/calendar.interface';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  // calendar: CalendarInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
