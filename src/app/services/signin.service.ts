import { Signin } from './../interfaces/signin';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ROUTE } from './../routes/api-routes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http: HttpClient) { }

  getSignins():Observable<Signin[]>{
    return this.http.get<Signin[]>(API_ROUTE.SIGNIN.URI);
  }

  getSignin(id: number){
    return this.http.get(API_ROUTE.SIGNIN.URI+`/${id}`);
  }
  
  postSignin(signin: Signin):Observable<Signin>{
    console.log(signin);
    return this.http.post<Signin>(API_ROUTE.SIGNIN.URI, signin);
  }

  deleteSignin(id: number){
    return this.http.delete(API_ROUTE.SIGNIN.URI+`/${id}`);
  }

  updateSignin(signin: Signin, id: number):Observable<Signin>{
    return this.http.put<Signin>(API_ROUTE.SIGNIN.URI+`/${id}`, signin);
  }
}


