import { API_ROUTE } from './../routes/api-routes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private tokenName = 'token';

  constructor(private http: HttpClient) { }

  public logOn(identifiant:any): any{
    return this.http.post(API_ROUTE.LOGON.URI, identifiant);
  }

  geTtoken(){
    return localStorage.getItem(this.tokenName);
  }

  seTtoken(token: string){
    return localStorage.setItem(this.tokenName, token);
  }

  logout(){
    localStorage.removeItem(this.tokenName);
  }

}
