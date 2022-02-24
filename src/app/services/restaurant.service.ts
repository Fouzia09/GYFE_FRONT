import { Restaurant } from './../interfaces/restaurant';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { API_ROUTE } from './../routes/api-routes';
import { HttpClient } from '@angular/common/http';
import { handleError } from '../constants/handle-http-errors';
import { RestaurantOUT } from '../interfaces/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getRestaurants():Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(API_ROUTE.RESTAURANTS.URI);
  }

  getRestaurant(id: number):Observable<Restaurant>{
    return this.http.get<Restaurant>(API_ROUTE.RESTAURANTS.URI+`/${id}`);
  }
  
  postRestaurant(restaurant: Restaurant):Observable<Restaurant>{
    return this.http.post<Restaurant>(API_ROUTE.RESTAURANTS.URI, restaurant);
  }

  deleteRestaurant(id: number){
    return this.http.delete(API_ROUTE.RESTAURANTS.URI+`/${id}`);
  }

  updateRestaurant(restaurant: Restaurant, id: number):Observable<Restaurant>{
    return this.http.put<Restaurant>(API_ROUTE.RESTAURANTS.URI+`/${id}`, restaurant);
  }

  getThreeLastRestaurants(): Observable<RestaurantOUT[]> {
    return (
      this.http
        .get<RestaurantOUT[]>(`${API_ROUTE.RESTAURANTS.URI}/threeLast`)
        .pipe(map((res) => {
            retry(3),
            catchError(handleError);
            return res;
          }))
    );
  }
}
