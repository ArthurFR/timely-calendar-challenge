import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CalendarEvent, CalendarEvents } from 'src/app/core/interfaces/calendar.interface';
import { CalendarService } from 'src/app/core/services/apis/calendar.service';

import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set page to 0 and events to [] and call getCalendarEvents', () => {
    component.page = 1;
    component.events = [{} as CalendarEvent]
    spyOn(component, 'getCalendarEvents').and.returnValue(of([]))
    component.getEventsFromNewDate();

    expect(component.page).toBe(0);
    expect(component.events).toEqual([]);
  });

  it('should call getCalendarEvents', () => {
    const spy = spyOn(component, 'getCalendarEvents').and.returnValue(of([]))
    component.onScroll();

    expect(spy).toHaveBeenCalled();
  });
});
