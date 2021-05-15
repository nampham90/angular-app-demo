
import {Component,OnInit} from "@angular/core";

import { BdscService } from '../../../Services/bds.module';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
    templateUrl: 'detail.component.html',
    selector: 'detail',
    providers:[BdscService]
})

export class DetailComponent implements OnInit{
    currentBds : any;
    image: any;
    active='active';
    message = '';

    constructor(
        private bdsidSevrice: BdscService,
        private route: ActivatedRoute,
        private router: Router
    ){}
    ngOnInit(): void {
       this.message="";
       this.getBdsID(this.route.snapshot.paramMap.get('id'));
    }

    getBdsID(id:any):void{
         this.bdsidSevrice.get(id)
           .subscribe(data=>{
               this.currentBds=data;
               this.image=data.image;
               console.log(this.currentBds.tenbds);
           },
              error=>{
                  console.log(error);
              });
    }



}