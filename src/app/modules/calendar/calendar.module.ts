import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule } from './calendar.routing.module';



@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CalendarRoutingModule,
    CommonModule
  ],
})
export class CalendarModule { }
