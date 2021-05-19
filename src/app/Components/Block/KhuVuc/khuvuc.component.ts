import {Component, OnInit} from "@angular/core";
import { ActivatedRoute ,Router} from '@angular/router';
import {KhuvucService} from '../../../Services/khuvuc.module';
import {BdscService} from '../../../Services/bds.module';
import { analyzeAndValidateNgModules } from "@angular/compiler";


@Component({
    templateUrl: 'khuvuc.component.html',
    styleUrls: ['khuvuc.component.css'],
    selector: 'khuvuc',
    providers: [KhuvucService,BdscService]

})

export class KhuVucComponent implements OnInit{
    khuvuc :any;
    currentbds:any;
    bdsdata:any;

    currentIndex = -1;
    constructor(
        private khuvucSevrice:KhuvucService,
        private bdsService: BdscService,
        private route: ActivatedRoute,
        private router: Router
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

    setActiveTutorial(khuvucbds:any, index:any): void {
        this.currentbds = khuvucbds;
        this.currentIndex = index;
        console.log(this.currentbds.tenkhuvuc+":"+this.currentIndex);


    }

    refreshList(): void {
        this.retrieveKhuvuc();
        this.currentbds = null;
        this.currentIndex = -1;
    }

}