import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ChargeService {
    private appUrl = 'http://10.10.10.14:8080/calificaciones/';

    constructor(private http: HttpClient) { }

    getCalificaciones():Observable<any> {
        return this.http.get(this.appUrl+"getBy/");
    }

    getCalificacionesByParams(
        alumnId:any = null, 
        subjectId:any=null, 
        teacherId:any=null, 
        groupId:any=null
    ): Observable<any> {
        return this.http.get(this.appUrl+"?alumnoid="+alumnId+"&materiaid="+subjectId+"&profesorid="+teacherId+"&grupoid="+groupId);
    }

    getOne(
        alumnId:any, 
        subjectId:any, 
        teacherId:any, 
        groupId:any
    ):Promise<Object> {
        return this.http.get(this.appUrl+"getBy/"+"?alumnoid="+alumnId+"&materiaid="+subjectId+"&profesorid="+teacherId+"&grupoid="+groupId).toPromise();
    }

    updateCalificacion(
        data:any,
        alumnId:any, 
        subjectId:any, 
        teacherId:any, 
        groupId:any
    ):Promise<Object> {
        return this.http.put(this.appUrl+"putBy/?alumnoid="+alumnId+"&materiaid="+subjectId+"&profesorid="+teacherId+"&grupoid="+groupId, data).toPromise();
    }

    deleteGroup(
        alumnId:any, 
        subjectId:any, 
        teacherId:any, 
        groupId:any, 
        calificacion:any
    ):Promise<Object> {
        return this.http.delete(this.appUrl+"?alu="+alumnId+"&mat="+subjectId+"&pro="+teacherId+"&gru="+groupId+"&total="+calificacion).toPromise();
    }
    
    saveCharge(
        data:any,
        alumnId:any, 
        subjectId:any, 
        teacherId:any, 
        groupId:any
    ):Promise<Object> {
        return this.http.post(this.appUrl+"?alu="+alumnId+"&mat="+subjectId+"&pro="+teacherId+"&gru="+groupId, data).toPromise();
    }
}
