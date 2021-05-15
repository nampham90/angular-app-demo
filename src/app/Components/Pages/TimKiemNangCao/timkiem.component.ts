import {Component,OnInit} from "@angular/core";
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { BdscService } from '../../../Services/bds.module';

@Component({
    templateUrl: 'timkiem.component.html',
    selector: 'timkiemnangcao',
    providers: [BdscService]
})

export class TimkiemNangCaoComponent implements OnInit{
    phanloai:any;
    loaibds:any;
    khuvuc:any;
    bdstimkiem:any;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private bdsSevvice: BdscService
    ){

    }
    totalLength : any;
    page: number=1;

    ngOnInit(): void {
        this.route.paramMap.subscribe((params: ParamMap)=>{
             this.phanloai=params.get('phanloai');
             this.loaibds=params.get('loaibds');
             this.khuvuc=params.get('khuvuc');
             const data={
                 phanloai: this.phanloai,
                 loaibds: this.loaibds,
                 khuvuc: this.khuvuc
             }
              this.bdsSevvice.findtimkiem(data)
                 .subscribe(dulieu=>{
                     this.bdstimkiem=dulieu;
                     this.totalLength=dulieu.length;
                     console.log(dulieu);
                 },err=>{
                     console.log(err);
                 })

        })
    }
}