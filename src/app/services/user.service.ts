import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { handleError } from '../constants/handle-http-errors';
import { API_ROUTE } from '../routes/api-routes';
import { User, UserOUT } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(API_ROUTE.USER.URI);
  }

  getUser(id: number){
    return this.http.get(API_ROUTE.USER.URI+`/${id}`);
  }

  postUser(user: User):Observable<User>{
    console.log(user);
    return this.http.post<User>(API_ROUTE.USER.URI, user);
  }

  deleteUser(id: number){
    return this.http.delete(API_ROUTE.USER.URI+`/${id}`);
  }

  updateUser(user: User, id: number):Observable<User>{
    return this.http.put<User>(API_ROUTE.USER.URI+`/${id}`, user);
  }

  getCurrentUser():Observable<User[]>{
    return this.http.get<User[]>(API_ROUTE.CURRENT_USER.URI);
  }

  patchResetPasswordUser(user: User, email: string):Observable<User>{
    return this.http.patch<User>(API_ROUTE.USER.URI+`/${email}`+`/reset-password`, user);
  }

  getUserByUsername(username: string): Observable<UserOUT> {
    return (
      this.http
        .get<UserOUT>(`${API_ROUTE.USER.URI}/findByUsername/${username}`)
        .pipe(map((res) => {
            retry(3),
            catchError(handleError);
            return res;
          }))
    );
  }
}


