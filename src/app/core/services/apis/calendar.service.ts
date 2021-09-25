import { Injectable,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CalendarInfo } from '../../interfaces/calendar.interface';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  // private readonly url = environment.apis.calendar;
  // calendarInfo: CalendarInfo;

  // constructor(
  //   private httpClient: HttpClient,
  // ) { }

  // getCalendarInfo(): Observable<CalendarInfo> {
  //   const calendarUrl =  'https://calendar.time.ly/6a37fb6n';
  //   return this.httpClient.post<CalendarInfo>(`${this.url}/calendars/info`, { url: calendarUrl })
  // }

  // getCalendarEvents(): Observable<{}> {
  //   if (this.calendarInfo) {
  //     return this.httpClient.get<{}>(`${this.url}/alendars/${calendarId}/events`)
  //   } else {
  //     return this.getCalendarInfo().pipe(

  //     )
  //   }

  // }
}
