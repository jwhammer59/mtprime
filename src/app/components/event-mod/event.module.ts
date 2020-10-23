import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandardModule } from 'src/app/core/standard.module';
import { EventRoutingModule } from './event-routing.module';
import { EventsComponent } from './events/events.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { DeleteEventComponent } from './events/delete-event/delete-event.component';
import { DetailEventComponent } from './events/detail-event/detail-event.component';

import { TableModule } from '../table-mod/table.module';

@NgModule({
  declarations: [
    EventsComponent,
    AddEventComponent,
    EditEventComponent,
    DeleteEventComponent,
    DetailEventComponent,
  ],
  imports: [CommonModule, EventRoutingModule, StandardModule, TableModule],
})
export class EventModule {}
