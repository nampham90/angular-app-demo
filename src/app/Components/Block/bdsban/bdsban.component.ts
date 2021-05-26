import { Component, OnInit } from '@angular/core';
import { BdscService } from '../../../Services/bds.module';

@Component({
  selector: 'app-bdsban',
  templateUrl: './bdsban.component.html',
  styleUrls: ['./bdsban.component.css']
})
export class BDSBanComponent implements OnInit {
  dataphanloai1 : any;
  dataphanloai2 : any;


  phanloai1 ='Bán Đất Huế';
  phanloai2 ='Bán Nhà Huế';


  totalLength1: any;
  page1: number=1;

  totalLength2: any;
  page2: number=1;

  constructor(
      private bdsService: BdscService
  ) { }

  ngOnInit(): void {
      const phanloai1={
         phanloai:this.phanloai1
      }
      this.getphanloai1(phanloai1);
      const phanloai2={
        phanloai:this.phanloai2
      }
      this.getphanloai2(phanloai2);

      
  }

  getphanloai1(phanloai:any): void{
    this.bdsService.getPhanloai(phanloai).subscribe(data=>{
        this.dataphanloai1=data;
        this.totalLength1=data.length;
        console.log({kq:data});
    },error=>{
        console.log(error);
    })
  }
  getphanloai2(phanloai:any): void{
    this.bdsService.getPhanloai(phanloai).subscribe(data=>{
        this.dataphanloai2=data;
        this.totalLength2=data.length;
        console.log({kq:data});
    },error=>{
        console.log(error);
    })
  }
}
