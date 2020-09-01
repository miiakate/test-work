import {Injectable} from '@angular/core';
import {EventModel} from '../models/event.model';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) {
  }


  getEvent(): Observable<EventModel> {
    return this.http.get<EventModel>(environment.http);
  }

  addEvent(event: EventModel): Observable<EventModel> {
    return this.http.post<EventModel>(environment.http, event);
  }


}
