import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { API_ROUTE } from '../routes/api-routes';
import { handleError } from '../constants/handle-http-errors';
import { FavoriteOUT, NewFavorite, UpdateFavorite } from '../interfaces/favorite';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http: HttpClient) {}

  getFavoriteByItemUrl(itemUrl: string): Observable<FavoriteOUT> {
    return (
      this.http
        .get<FavoriteOUT>(`${API_ROUTE.FAVORITES.URI}/byItemUrl/${itemUrl}`)
        .pipe(map((res) => {
            retry(3),
            catchError(handleError);
            return res;
          }))
    );
  }

  addFavorite(fav: NewFavorite): Observable<FavoriteOUT> {
    return (
      this.http
        .post<FavoriteOUT>(`${API_ROUTE.FAVORITES.URI}`, fav)
        .pipe(
          map((res) => {
            retry(3),
            catchError(handleError);
            return res;
          })
        )
    );
  }

  updateFavorite(id:number, fav: UpdateFavorite): Observable<FavoriteOUT> {
    return (
      this.http
        .patch<FavoriteOUT>(`${API_ROUTE.FAVORITES.URI}/${id}`, fav)
        .pipe(
          map((res) => {
            retry(3),
            catchError(handleError);
            return res;
          })
        )
    );
  }
}
