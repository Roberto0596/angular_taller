import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../model/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
    private appUrl = 'http://10.10.10.14:8080/materias/';

    constructor(private http: HttpClient) { }

    getSubjects():Observable<any> {
        return this.http.get<Subject[]>(this.appUrl);
    }

    getSubject(clave:number):Promise<Object> {
        return this.http.get<Subject>(this.appUrl+clave).toPromise();
    }

    updateSubjet(id:string, data:any):Promise<Object> {
        return this.http.put<Subject>(this.appUrl+id, data).toPromise();
    }

    deleteSubjet(id:string):Promise<Object> {
        return this.http.delete<Subject>(this.appUrl+id).toPromise();
    }   

    saveSubjet(data:any):Promise<Object> {
        return this.http.post<Subject>(this.appUrl, data).toPromise();
    }
}
