import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../user';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  path = "http://localhost:3000/user";

  constructor(private http: HttpClient) { }
  getUser(): Observable<User[]> {
    {
      return this.http.get<User[]>(this.path).pipe(
        tap(data => {
          console.log(JSON.stringify(data))
        }),
        catchError(this.handleError)
      );
    }
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = ""

    if (err.error instanceof ErrorEvent) {
      errorMessage = "An error occured!" + err.error.message;
    }
    else {
      errorMessage = "A system error has occurred!";
    }
    return throwError(errorMessage);
  }
}
