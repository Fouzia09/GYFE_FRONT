import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const headers = new HttpHeaders({'Content-Type':'application/merge-patch+json; charset=utf-8'});
    return (
      this.http
        .patch<FavoriteOUT>(`${API_ROUTE.FAVORITES.URI}/${id}`, fav, {headers})
        .pipe(
          map((res) => {
            retry(3),
            catchError(handleError);
            return res;
          })
        )
    );
  }

  deleteFavorite(id: number): Observable<undefined> {
    return (
      this.http
        .delete<undefined>(`${API_ROUTE.FAVORITES.URI}/${id}`)
        .pipe(
          map(() => {
            retry(3),
            catchError(handleError);
            return undefined;
          })
        )
    );
  }
}
