import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Group } from '../model/Group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
    private appUrl = 'http://10.10.10.14:8080/grupos/';

    constructor(private http: HttpClient) { }

    getGroups():Observable<any> {
        return this.http.get<Group[]>(this.appUrl);
    }

    getGroup(clave:number):Promise<Object> {
        return this.http.get<Group>(this.appUrl+clave).toPromise();
    }

    updateGroup(id:string, data:any):Promise<Object> {
        return this.http.put<Group>(this.appUrl+id, data).toPromise();
    }

    deleteGroup(id:string):Promise<Object> {
        return this.http.delete<Group>(this.appUrl+id).toPromise();
    }
    
    saveGroup(data:any):Promise<Object> {
        return this.http.post<Group>(this.appUrl, data).toPromise();
    }
}
