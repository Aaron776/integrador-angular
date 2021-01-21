import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ActivityModel } from '../models/activity.model';
@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private api = 'http://localhost:8080/api/v1/activities';
  constructor(private http: HttpClient) {
  }
  getAllActivitiesByEmployee(id: string): Observable<any> {
    return this.http.get(this.api + '/employee/' + id).pipe(
      map(response => response),
      catchError(error => {
        alert(error.error);
        return error;
      })
    );
  }

  getActivityById(id:string):Observable<any>{
    return this.http.get(this.api + '/' + id).pipe(
      map(response => response),
      catchError(error => {
        alert(error.error);
        return error;
      })
    );
  }

  createActivity(activity: ActivityModel): Observable<any> {
    return this.http.post(this.api, activity).pipe(
      map(response => response),
      catchError(error => {
        alert(error.error);
        return error;
      })
    );
  }

}


