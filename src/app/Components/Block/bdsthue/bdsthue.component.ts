import { Component, OnInit } from '@angular/core';
import { BdscService } from '../../../Services/bds.module';


@Component({
  selector: 'app-bdsthue',
  templateUrl: './bdsthue.component.html',
  styleUrls: ['./bdsthue.component.css']
})
export class BDSThueComponent implements OnInit {
  dataphanloai3 : any;
  dataphanloai4 : any;

  phanloai3 ='Cho Thuê Đất Huế';
  phanloai4= 'Cho Thuê Nhà Huế';

  totalLength3: any;
  page3: number=1;

  totalLength4: any;
  page4: number=1;

  constructor(
     private bdsService : BdscService
  ) { }

  ngOnInit(): void {
    const phanloai3={
      phanloai:this.phanloai3
    }
    this.getphanloai3(phanloai3);
    const phanloai4={
      phanloai:this.phanloai4
    }
    this.getphanloai4(phanloai4);
  }

  getphanloai3(phanloai:any): void{
    this.bdsService.getPhanloai(phanloai).subscribe(data=>{
        this.dataphanloai3=data;
        console.log({kq:data});
    },error=>{
        console.log(error);
    })
  }
  getphanloai4(phanloai:any): void{
    this.bdsService.getPhanloai(phanloai).subscribe(data=>{
        this.dataphanloai4=data;
        console.log({kq:data});
    },error=>{
        console.log(error);
    })
  }

}
