import { UserToken } from './../interfaces/user';
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


  public userLogged(): string  {
    const token = this.tokenDecoded() as UserToken;
    const user = token.username;
    return user;
  }

  public userLoggedRoles(): string[] {
    const token = this.tokenDecoded() as UserToken;
    const roles = token.roles;
    return roles;
  }

  /* public tokenGetter(): string {
    return localStorage.getItem('token');
  } */



  public tokenExpiration(): number {
    const token = this.tokenDecoded() as UserToken;
    const exp = token.exp;
    return exp;
  }

  
  private tokenDecoded(): UserToken | boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken = atob(token.split('.')[1]);
      const decodedTokenJsonFormat = JSON.parse(decodedToken);
      return decodedTokenJsonFormat;
    } else {
      return false;
    }
  }


}
