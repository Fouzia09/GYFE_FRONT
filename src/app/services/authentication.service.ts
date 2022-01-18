import { API_ROUTE } from './../routes/api-routes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private tokenName = 'token';

  constructor(
    private http: HttpClient,
    //déconnexion
    private router: Router
    ) { }

  public logOn(identifiant:any): any{
    return this.http.post(API_ROUTE.LOGON.URI, identifiant);
  }

  getToken(){
    return localStorage.getItem(this.tokenName);
  }

  seTtoken(data: Object){
    //@ts-ignore
    data.hasOwnProperty('token') ? localStorage.setItem(this.tokenName,data.token) : this.logout();
  }

  logout(){
    localStorage.removeItem(this.tokenName);
    //déconnection
    this.router.navigate(['/authentication/login']);
  }

  isLogged(){
    return this.getToken() !== null;
  }


}
