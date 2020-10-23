import { Component, OnInit } from '@angular/core';

import { Event } from 'src/app/models/Event';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.scss'],
})
export class EventTableComponent implements OnInit {
  events: Event[];
  event: Event;

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }
}
