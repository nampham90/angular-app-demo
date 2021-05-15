import { Injectable } from "@angular/core";

import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable()

export class CategoryService{
    constructor( private http: HttpClient){}
    getCategory(){
        let options={
            headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
        }
        return this.http.post("http://192.168.1.26:3443/api/cate",options);
    }
}



