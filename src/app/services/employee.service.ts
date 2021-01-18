import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private api = 'http://localhost:8080/api/v1/employees/area/';
  constructor(private http: HttpClient) { }

  getAllEmployeeByArea(): Observable<any> {
    const id = localStorage.getItem('area');
    return this.http.get(this.api + '\\' + id).pipe(
      map(response => response),
      catchError(error => {
        alert(error.error);
        return error;
      })
    );
  }
}
