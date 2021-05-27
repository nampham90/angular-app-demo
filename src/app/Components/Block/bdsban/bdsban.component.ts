import { Component, OnInit } from '@angular/core';
import { BdscService } from '../../../Services/bds.module';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

  id:any;

  bds: any;

  currentIndex = -1;

  constructor(
      private bdsService: BdscService,
      private route: ActivatedRoute,
      private router: Router 
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
      //this.id=this.route.snapshot.paramMap.get('id');    
     ///console.log({kq:this.id})
      //this.getbds(this.route.snapshot.paramMap.get('id'));

    
  }

  getbds(id: any):void{
      this.bdsService.get(id).subscribe(data=>{
         this.bds=data;
         console.log(data);
      },
         err=>{
           console.log(err);
         }
       )
  }
  setIdbds(idbds:any,index:any): void{
      this.id=idbds;
      this.currentIndex=index;
      this.getbds(this.id);
      console.log(this.currentIndex);
      this.refreshList();
  }
  refreshList(): void {
    this.id = null;
    this.currentIndex = -1;
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
