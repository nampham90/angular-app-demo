import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from "@angular/common/http";

const baseUrl = 'https://namphamtrade.com/api/khuvuc/';

@Injectable()

export class KhuvucService{
    constructor( private http: HttpClient){}
    getAll(): Observable<any> {
        return this.http.get(baseUrl);
    }
}