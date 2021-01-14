import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{ catchError, map} from 'rxjs/operators';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private api='http://localhost:8080/api/v1/auth/admin';
  constructor(private http:HttpClient) {
   }

   login(user:UserModel):Observable<any>{
     return this.http.post(this.api, user).pipe(
      map(response=>response),
      catchError( error=>{
        alert(error.error);
        return error;
        
        
      }
      
      ) 
     );
   }
}


