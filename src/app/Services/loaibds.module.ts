import { Injectable } from "@angular/core";
import { Observable,throwError  } from 'rxjs';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { catchError, map } from 'rxjs/operators';

const baseUrl = 'https://192.168.1.26:3443/api/loaibds';

@Injectable()

export class LoaibdsService{
    constructor(
         private http: HttpClient
         
         ){}
    getAll(): Observable<any> {
        const httpHeaders=new HttpHeaders({
                  'Content-Type': 'application/json',
                  'X-Requested-With': 'XMLHttpRequest',
                  'MyClientCert': '',    
                  'MyToken': ''            
        })
        return this.http.get(baseUrl,{headers:httpHeaders}).pipe( map(res => res), catchError(err => throwError(err)));
    }
}
