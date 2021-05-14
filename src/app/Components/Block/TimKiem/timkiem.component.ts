import {Component,OnInit } from "@angular/core";
import {LoaibdsService} from '../../../Services/loaibds.module';

import {KhuvucService} from '../../../Services/khuvuc.module';

import {BdscService} from '../../../Services/bds.module';

import {FormGroup,FormControl} from '@angular/forms';

import {Router,ActivatedRoute,ParamMap} from "@angular/router";

@Component({
    templateUrl: 'timkiem.component.html',
    selector: 'timkiem',
    providers: [LoaibdsService,KhuvucService,BdscService]
})

export class TimkiemComponent implements OnInit{ 
    loaibsd: any;
    khuvuc: any;
    public formSeach: FormGroup;
    constructor(
             private router: Router,
             private route : ActivatedRoute,
             private bdsSevvice: BdscService,
             private loadbdsService: LoaibdsService,
             private khuvucSevrice:KhuvucService) {
        
             this.formSeach=new FormGroup({
                 phanloai: new FormControl('BDS Thuê'),
                 loaibds : new FormControl('Căn Hộ Cao Cấp'),
                 khuvuc : new FormControl('Thành Phố Huế')
             });
     }

    ngOnInit(): void {
        this.retrieveLoadbds();
        this.retrieveKhuvuc();
    }
    retrieveLoadbds(): void {
        this.loadbdsService.getAll()
          .subscribe(
            data => {
              this.loaibsd = data;
              console.log(data);
            },
            error => {
              console.log(error);
            });
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
    onSubmit(){
         console.log(this.formSeach.value.phanloai);
         const data={
            phanloai: this.formSeach.value.phanloai,
            loaibds : this.formSeach.value.loaibds,
            khuvuc: this.formSeach.value.khuvuc
         }
         console.log(data);
         this.router.navigate(['/timkiemnangcao',{phanloai:this.formSeach.value.phanloai,loaibds:this.formSeach.value.loaibds,khuvuc:this.formSeach.value.khuvuc}]);
        /* this.bdsSevvice.findtimkiem(data)
             .subscribe(dulieu=>{
                 console.log(dulieu);

             },
               err=>{
                 console.log(err);
               });*/
    }
}