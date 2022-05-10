import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { Alumn } from '../model/Alumn';
import { CookieService } from "ngx-cookie-service";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

   private appUrl = 'http://localhost:8081/movement/';
   
   constructor(private http: HttpClient, private cookies: CookieService) { }

   getMovements(account_number:number):Observable<any> {
        return this.http.get(this.appUrl + account_number);
   }
}
