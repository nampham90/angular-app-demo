import {Component, OnInit} from "@angular/core";

import {KhuvucService} from '../../../Services/khuvuc.module';


@Component({
    templateUrl: 'khuvuc.component.html',
    selector: 'khuvuc',
    providers: [KhuvucService]

})

export class KhuVucComponent implements OnInit{
    khuvuc :any;
    constructor(
        private khuvucSevrice:KhuvucService
    ){}

    ngOnInit(): void {
       this.retrieveKhuvuc();
    }
    retrieveKhuvuc(): void{
        this.khuvucSevrice.getAll()
           .subscribe(data=>{
               this.khuvuc=data;
               console.log(data);
           },
            error=>{
                console.log(error);
            });
    }
}