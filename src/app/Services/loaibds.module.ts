import { Injectable } from "@angular/core";
import { Observable,throwError  } from 'rxjs';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { catchError, map } from 'rxjs/operators';

const baseUrl = 'https://namphamtrade.com/api/loaibds';

@Injectable()

export class LoaibdsService{
    constructor(
         private http: HttpClient
         
         ){}
    getAll(): Observable<any> {
        return this.http.get(baseUrl);
    }
}
