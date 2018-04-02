import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable()
export class EventService {

  private _eventsrUrl = "http://localhost:3000/api/events";
  private _specialEventsrUrl = "http://localhost:3000/api/special";

  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get<any>(this._eventsrUrl);
  }

  getSpecialEvents(){
    return this.http.get<any>(this._specialEventsrUrl);
  }

}
