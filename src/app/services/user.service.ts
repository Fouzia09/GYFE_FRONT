<<<<<<< HEAD
import { Injectable } from '@angular/core';
=======
import { User } from '../interfaces/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ROUTE } from '../routes/api-routes';
import { HttpClient } from '@angular/common/http';
>>>>>>> 2cf032a5b64f92eb9bd5aedfa356c7689e2101e0

@Injectable({
  providedIn: 'root'
})
export class UserService {

<<<<<<< HEAD
  constructor() { }
}
=======
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
}


>>>>>>> 2cf032a5b64f92eb9bd5aedfa356c7689e2101e0
