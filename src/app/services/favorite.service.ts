import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { BASE_API } from '../constants/base-api';
import { handleError } from '../constants/handle-http-errors';
import { FavoriteOUT } from '../interfaces/favorite';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http: HttpClient) {}

  getFavByUser(userId: number): Observable<FavoriteOUT[]> {
    return (
      this.http
        .get<FavoriteOUT[]>(`${BASE_API}/favorites/${userId}`)
        .pipe(map((results) => {
            retry(3),
            catchError(handleError);
            return results;
          }))
    );
  }
}
