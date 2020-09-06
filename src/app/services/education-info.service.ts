import { Injectable } from '@angular/core';
import { EducationLevel, AcademicYear, EducationPeriod, StartEndDate, TotalCourseWeek, EducationInfo } from '../setup/educationInfo';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
@Injectable()
export class EducationInfoService {

  path = "http://localhost:3002/educationInfos";

  constructor(private http: HttpClient) { }

  getEducationLevels(): Observable<EducationLevel[]> {
    return this.http.get<EducationLevel[]>(this.path).pipe(
      tap(data => {
        console.log(JSON.stringify(data[0]['educationLevels']))
      }),
      catchError(this.handleError)
    );
  }
  getAcademicYears(): Observable<AcademicYear[]> {
    return this.http.get<AcademicYear[]>(this.path).pipe(
      tap(data => {
        console.log(JSON.stringify(data[0]['academicYears']))
      }),
      catchError(this.handleError)
    );
  }
  getEducationPeriods(): Observable<EducationPeriod[]> {
    return this.http.get<EducationPeriod[]>(this.path).pipe(
      tap(data => {
        console.log(JSON.stringify(data[0]['educationLevels']))
      }),
      catchError(this.handleError)
    );
  }
  getStartEndDates(): Observable<StartEndDate[]> {
    return this.http.get<StartEndDate[]>(this.path).pipe(
      tap(data => {
        console.log(JSON.stringify(data[0]['startEndDates']))
      }),
      catchError(this.handleError)
    );
  }
  getTotalCourseWeeks(): Observable<TotalCourseWeek[]> {
    return this.http.get<TotalCourseWeek[]>(this.path).pipe(
      tap(data => {
        console.log(JSON.stringify(data[0]['totalCourseWeeks']))
      }),
      catchError(this.handleError)
    );
  }
  postEducationInfo(educationInfo: EducationInfo): Observable<EducationInfo> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<EducationInfo>(this.path, httpOptions).pipe(
      tap(data => {
        console.log(JSON.stringify(data[0][0]))
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
