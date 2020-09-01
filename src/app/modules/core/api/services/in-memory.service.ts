import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryService implements InMemoryDbService {
  createDb() {
    const events = [
      {id: 0, name: 'Event 1', address: 'USA, NY', date: '13 april'},
      {id: 1, name: 'Event 2', address: 'USA, NY', date: '13 april'},
      {id: 2, name: 'Event 3', address: 'USA, NY', date: '13 april'},
    ];
    return {events};
  }

}
