import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from "@angular/common/http";

const baseUrl = 'http://192.168.1.26:3000/api/loaibds/';

@Injectable()

export class LoaibdsService{
    constructor( private http: HttpClient){}
    getAll(): Observable<any> {
        return this.http.get(baseUrl);
    }
}
