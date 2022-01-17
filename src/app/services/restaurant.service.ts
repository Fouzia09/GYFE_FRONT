import { Restaurant } from './../interfaces/restaurant';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ROUTE } from './../routes/api-routes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getRestaurants():Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(API_ROUTE.RESTAURANTS.URI);
    //Dans le cas où on souhaiterait retourner un Json LD afin de rendre nos données public et accessible aux navigateurs
    /* .pipe(map(data=>{
      //@ts-ignore
      const transformedData = Object.keys(data).map(key => data[key]);
      return transformedData[3];
    })); */
  }

  getRestaurant(id: number){
    return this.http.get(API_ROUTE.RESTAURANTS.URI+`/${id}`);
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
}
