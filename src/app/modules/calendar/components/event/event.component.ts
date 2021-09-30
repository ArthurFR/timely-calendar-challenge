import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CalendarEvent, EventImage } from 'src/app/core/interfaces/calendar.interface';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {

  @Input() color = '';
  @Input() set event(event: CalendarEvent | undefined) {
    if (event) {
      this.eventData = event;
      this.image = event.images?.length > 0 ? event.images[0] : undefined;
    }
  };

  eventData: CalendarEvent | undefined;
  image: EventImage | undefined;

  getImageUrl() {
    const url = this.image?.medium?.url ? `url(${this.image.small.url})` : 'none';
    return url;
  }
}
