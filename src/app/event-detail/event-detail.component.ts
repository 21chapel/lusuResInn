import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  selected_id;

  event;

  events = [];

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
    this.selected_id = this.route.snapshot.paramMap.get('id');
    this.event = this.events[this.selected_id - 1];
  }

}
