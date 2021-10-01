import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CalendarEvents, CalendarInfo } from '../../interfaces/calendar.interface';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private readonly url = environment.apis.calendar;
  private calendarInfo: CalendarInfo | null = null;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCalendarInfo(): Observable<CalendarInfo> {
    const calendarUrl = 'https://calendar.time.ly/6a37fb6n';
    const calendarInfo = this.calendarInfo;

    if (calendarInfo ===  null)
      return this.httpClient.post<CalendarInfo>(`${this.url}/calendars/info`, { url: calendarUrl });
    else
      return of(calendarInfo);
  }

  getCalendarEvents(page: number, start_date: string): Observable<CalendarEvents> {
    const params = {start_date, per_page: 30, page};

    return this.getCalendarInfo().pipe(
      tap(calendar => this.calendarInfo = calendar),
      concatMap(({data: { id }}) => this.httpClient.get<CalendarEvents>(`${this.url}/calendars/${id}/events`, { params })),
      map(({ data }) => ({
        data: {
          ...data,
          items: data.items.map(item => ({...item, description_short: item.description_short?.replace('&hellip;', '...')}))
        }
      }))
    )
  }
}
