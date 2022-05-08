import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../model/Teacher';
import { CookieService } from "ngx-cookie-service"

@Injectable({
  providedIn: 'root'
})

export class TeacherService {

    private appUrl = 'http://10.10.10.14:8080/portalDocente/';

    constructor(private http: HttpClient, private cookies: CookieService) { }

    getTeachers():Observable<any> {
      return this.http.get<Teacher[]>(this.appUrl);
    }

    getTeacher(clave:number):Promise<Object> {
      return this.http.get<Teacher>(this.appUrl+clave).toPromise();
    }

    updateTeacher(id:string, data:any):Promise<Object> {
      return this.http.put<Teacher>(this.appUrl+id, data).toPromise();
    }

    deleteTeacher(id:string):Promise<Object> {
      return this.http.delete<Teacher>(this.appUrl+id).toPromise();
    }
    
    saveTeacher(data:any):Promise<Object> {
      return this.http.post<Teacher>(this.appUrl, data).toPromise();
    }

    setToken(token: any) {
        this.cookies.set("adminToken", token);
    }
    getToken() {
        return this.cookies.get("adminToken");
    }

    login(data:any):Promise<Object> {
        return this.http.post("https://reqres.in/api/login", data).toPromise();
    }

    logout() {
        this.cookies.deleteAll();
        this.cookies.delete("adminToken");
    }
}
