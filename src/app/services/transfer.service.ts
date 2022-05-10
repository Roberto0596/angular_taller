import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

   private appUrl = 'http://localhost:8081/transfer/';
   
   constructor(private http: HttpClient, private cookies: CookieService) { }

   doTransfer(body:any): Promise<Object> {
        return this.http.post(this.appUrl + "do", body).toPromise();
   }
}
