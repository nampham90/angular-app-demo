import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from "@angular/common/http";

const baseUrl = 'https://namphamtrade.com/api/user';

@Injectable({
    providedIn: 'root'
  })

export class UserService{
    constructor( private http: HttpClient){}
    create(data:any):Observable<any>{
        const httpHeaders=new HttpHeaders();
        httpHeaders.append('content-type','application/json');
        return this.http.post(baseUrl,data,{headers:httpHeaders});
    }
    login(username:String,password:String): Observable<any>{
        const data={
            username:username,
            password:password
        }
        const httpHeaders=new HttpHeaders();
        httpHeaders.append('content-type','application/json');
        return this.http.post(`${baseUrl}/login`,data,{headers:httpHeaders});
    }
}