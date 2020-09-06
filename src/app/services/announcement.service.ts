import { Injectable } from '@angular/core';
import { Announcement } from '../dashboard/announcements/announcements';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  path = 'http://localhost:3001/announcements';

  constructor(private http: HttpClient) { }

  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(this.path).pipe(
      tap(data => {
        console.log(JSON.stringify(data))
      }),
      catchError(this.handleError)
    );
  }
  removeAnnouncements(announcement: Announcement): Observable<Announcement> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.delete<Announcement>(this.path, httpOptions).pipe(
      tap(data => {
        console.log(JSON.stringify(data) + "deleted")
      }
      ),
      catchError(this.handleError)
    );
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
