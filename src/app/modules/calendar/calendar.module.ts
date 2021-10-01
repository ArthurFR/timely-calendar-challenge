import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule } from './calendar.routing.module';
import { NgxMasonryModule } from 'ngx-masonry';
import { EventComponent } from './components/event/event.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';


@NgModule({
  declarations: [
    CalendarComponent,
    EventComponent
  ],
  imports: [
    CalendarRoutingModule,
    CommonModule,
    NgxDaterangepickerMd.forRoot(),
    NgxMasonryModule,
    InfiniteScrollModule,
    FormsModule,
  ],
})
export class CalendarModule { }
