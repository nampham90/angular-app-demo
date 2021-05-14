import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from "@angular/common/http";

const baseUrl = 'http://192.168.1.26:3000/api/bds';

@Injectable({
    providedIn: 'root'
  })

export class BdscService{
    constructor( private http: HttpClient){}
    getAll(): Observable<any> {
        return this.http.get(baseUrl);
    }
    create(data:any):Observable<any>{
        const httpHeaders=new HttpHeaders();
        httpHeaders.append('content-type','application/json');
        return this.http.post(baseUrl,data,{headers:httpHeaders});
    }
    get(id: any): Observable<any> {
        return this.http.get(`${baseUrl}/${id}`);
    }
    getKhuvuc(khuvuc: any): Observable<any>{
        return this.http.get(`${baseUrl}/khuvuc/${khuvuc}`);
    }
    findtimkiem(data: any): Observable<any>{
        const httpHeaders=new HttpHeaders();
        httpHeaders.append('content-type','application/json');
        return this.http.post('http://192.168.1.26:3000/api/bds/timkiem',data,{headers:httpHeaders});
    }
}