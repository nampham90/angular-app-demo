import {Component, OnInit} from "@angular/core";
import { ActivatedRoute ,Router} from '@angular/router';
import {KhuvucService} from '../../../Services/khuvuc.module';


@Component({
    templateUrl: 'khuvuc.component.html',
    selector: 'khuvuc',
    providers: [KhuvucService]

})

export class KhuVucComponent implements OnInit{
    khuvuc :any;
    currentbds:any;
    bdsdata:any;
    currentIndex = -1;
    constructor(
        private khuvucSevrice:KhuvucService,
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