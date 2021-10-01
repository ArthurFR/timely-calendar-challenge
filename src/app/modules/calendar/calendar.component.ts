import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import { map, tap } from 'rxjs/operators';
import { CalendarEvent } from 'src/app/core/interfaces/calendar.interface';
import { CalendarService } from 'src/app/core/services/apis/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  events: CalendarEvent[] = [];
  page = 0;

  selected = {startDate: moment(), endDate: moment()};

  constructor(
    private calendarService: CalendarService
  ) { }

  ngOnInit() {
    this.getCalendarEvents().subscribe();
  }

  getEventsFromNewDate() {
    this.page = 0;
    this.events = [];
    this.getCalendarEvents().subscribe();
  }

  /**
   * Get the calendar events tem updates the events prop with them and sum 1 to page.
   * @returns Observable that returns the calendar events
   */
  getCalendarEvents() {
    return  this.calendarService.getCalendarEvents(this.page, this.selected.startDate.format('YYYY-MM-DD')).pipe(
      map(events => events.data.items),
      tap(events => this.events = [...events, ...this.events]),
      tap(() => this.page++)
    )
  }

  onScroll(): void {
    this.getCalendarEvents().subscribe();
  }
}
