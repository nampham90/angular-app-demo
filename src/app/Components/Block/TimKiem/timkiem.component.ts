import {Component,OnInit } from "@angular/core";

import {LoaibdsService} from '../../../Services/loaibds.module';
import {KhuvucService} from '../../../Services/khuvuc.module';

import {FormGroup,FormControl} from '@angular/forms';



@Component({
    templateUrl: 'timkiem.component.html',
    selector: 'timkiem',
    providers: [LoaibdsService,KhuvucService]
    
})

export class TimkiemComponent implements OnInit{
  loaibsd: any;
  khuvuc: any;
  public formSeach: FormGroup;

  constructor(
    private loadbdsService: LoaibdsService,
    private khuvucSevrice:KhuvucService
  ){
     
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
  
}