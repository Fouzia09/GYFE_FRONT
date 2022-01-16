import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { BASE_API } from '../constants/base-api';
import { handleError } from '../constants/handle-http-errors';
import { Room } from '../interfaces/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

public search = new BehaviorSubject<string>("");
  constructor(private http: HttpClient) {}

  getListRoom(): Observable<Room[]> {
    return (
      this.http
        .get<Room[]>(`${BASE_API}/rooms/`)
        .pipe(map((results) => {
            retry(3),
            catchError(handleError);
            return results;
          }))
    );
  }

}
