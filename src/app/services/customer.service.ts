import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { Alumn } from '../model/Alumn';
import { CookieService } from "ngx-cookie-service";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

   private appUrl = 'http://localhost:8081/customer/';
   
   constructor(private http: HttpClient, private cookies: CookieService) { }

   getAlumns():Observable<any> {
        return this.http.get(this.appUrl);
   }

   getAlumn(clave:number):Promise<Object> {
       return this.http.get(this.appUrl+clave).toPromise();
   }

   updateAlumn(id:string, data:any):Promise<Object> {
       return this.http.put(this.appUrl+id, data).toPromise();
   }

   deleteAlumn(id:string):Promise<Object> {
       return this.http.delete(this.appUrl+id).toPromise();
   }   

   saveAlumn(data:any):Promise<Object> {
       return this.http.post(this.appUrl, data).toPromise();
   }

   login(data:any):Promise<Object> {
      return this.http.post(this.appUrl + "login/", data).toPromise();
   }

   setToken(token: any) {
      this.cookies.set("token", token);
   }
   getToken() {
      return this.cookies.get("token");
   }

   logout() {
       this.cookies.deleteAll();
       this.cookies.delete("token");
   }
}
