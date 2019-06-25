import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-tbay',
  templateUrl: './tbay.component.html',
  styleUrls: ['./tbay.component.css']
})
export class TbayComponent implements OnInit {

  // event;

  public events = [ ];

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  onSelect(event) {
    this.router.navigate(['/thunderbay', event.id]);
  }

}
