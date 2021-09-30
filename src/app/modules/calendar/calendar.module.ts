import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule } from './calendar.routing.module';
import { NgxMasonryModule } from 'ngx-masonry';
import { EventComponent } from './components/event/event.component';



@NgModule({
  declarations: [
    CalendarComponent,
    EventComponent
  ],
  imports: [
    CalendarRoutingModule,
    CommonModule,
    NgxMasonryModule,
  ],
})
export class CalendarModule { }
