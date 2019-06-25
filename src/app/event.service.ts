import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  getEvents() {
    return [
      { id: 1, name: 'event 1', description: 'totally rad'},
      { id: 2, name: 'event 2', description: 'totally not rad'},
      { id: 3, name: 'event 3', description: 'totally lrad'},
    ];

  }

}
