import {Component,OnInit } from "@angular/core";

import {LoaibdsService} from '../../../Services/loaibds.module';

import {FormGroup,FormControl} from '@angular/forms';



@Component({
    templateUrl: 'timkiem.component.html',
    selector: 'timkiem',
    providers: [LoaibdsService]
    
})

export class TimkiemComponent implements OnInit{
  loaibsd: any;

  public formSeach: FormGroup;

  constructor(
    private loadbdsService: LoaibdsService
  ){
     
      this.formSeach=new FormGroup({
        phanloai: new FormControl('BDS Thuê'),
        loaibds : new FormControl('Căn Hộ Cao Cấp'),
        khuvuc : new FormControl('Thành Phố Huế')
      });
  }
  ngOnInit(): void {
    this.retrieveLoadbds();
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

  
}