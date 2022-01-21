import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { BASE_API } from '../constants/base-api';
import { handleError } from '../constants/handle-http-errors';

import { CommentIN, CommentOUT } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {}

  getComments(type: string, typeId: number): Observable<CommentOUT[]> {
    return (
      this.http
        .get<CommentOUT[]>(`${BASE_API}/comments/${type}/${typeId}`)
        .pipe(map((res) => {
            retry(3),
            catchError(handleError);
            return res;
          }))
    );
  }

  addComment(comment: CommentIN): Observable<CommentOUT> {
    return (
      this.http
        .post<CommentOUT>(`${BASE_API}/comments`, comment)
        .pipe(
          map((res) => {
            retry(3),
            catchError(handleError);
            return res;
          })
        )
    );
  }

  delete(commentId: number): Observable<undefined> {
    return (
      this.http
        .delete<undefined>(`${BASE_API}/comments/${commentId}`)
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
