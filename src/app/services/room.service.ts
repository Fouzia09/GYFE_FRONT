import { API_ROUTE } from './../routes/api-routes';
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

    postRoom(room: Room):Observable<Room>{
      return this.http.post<Room>(API_ROUTE.ROOMS.URI, room);
    }
  
    deleteRoom(id: number){
      return this.http.delete(`${BASE_API}/rooms/${id}`);
    }
  
    updateRoom(room: Room, id: number):Observable<Room>{
      return this.http.put<Room>(`${BASE_API}/rooms/${id}`, room);
    }
}
