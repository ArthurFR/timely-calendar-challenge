import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'src/app/core/interfaces/calendar.interface';
import { CalendarService } from 'src/app/core/services/apis/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  events: CalendarEvent[] = [];
  Math = Math;
  constructor(
    private calendarService: CalendarService
  ) { }

  // colors: Record<number, string> = {
  //   0: 'rgba(254, 3, 5, 0.8)',
  //   1: 'rgba(157, 157, 157, 0.8)',
  //   2: 'rgba(63, 2, 107, 0.8)',
  //   3: 'rgba(4, 195, 240, 0.8)',
  // }
  colors: Record<number, string> = {
    0: 'rgba(157, 157, 157, 0.8)',
    1: 'rgba(157, 157, 157, 0.8)',
    2: 'rgba(157, 157, 157, 0.8)',
    3: 'rgba(157, 157, 157, 0.8)',
  }

  ngOnInit(): void {
    this.calendarService.getCalendarEvents().subscribe(
      calendarEvents => this.events = calendarEvents.data.items
    )
  }

}
