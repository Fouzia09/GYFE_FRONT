import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { BASE_API } from '../constants/base-api';
import { handleError } from '../constants/handle-http-errors';
import { Room } from '../interfaces/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

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

    // Recuperer detail room par son id
    getRoom(id: number): Observable<Room> {
      return this.http.get<Room>(`${BASE_API}/rooms/${id}`)
      
      
    }

  
    // getDestinationByPrice(id: number): Observable<any> {
    //   return this.http.get(`${BASE_API}/rooms/filter/${id}`);
    // }


}
