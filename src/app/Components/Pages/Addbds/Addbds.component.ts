import {Component,OnInit} from "@angular/core";
import {LoaibdsService} from '../../../Services/loaibds.module';

import {KhuvucService} from '../../../Services/khuvuc.module';
import {BdscService} from '../../../Services/bds.module';

import {UploadFilesService} from '../../../Services/upload-file.module';

import { HttpEventType, HttpResponse,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup,FormControl,Validators  } from '@angular/forms';
import {Router,ActivatedRoute,ParamMap} from "@angular/router";
@Component({
    templateUrl:'Addbds.component.html',
    selector: 'addbds',
    providers: [LoaibdsService,KhuvucService,UploadFilesService]
})

export class AddbdsComponent implements OnInit{
    public formCreateBDS: FormGroup;
    //upload file
    selectedFiles?: FileList;
    progressInfos: any[] = [];
    message: string[] = [];
    nameImage: string[]=[];
  
    fileInfos?: Observable<any>;

    loaibds: any;
    khuvuc: any;

    submitted = false;

    constructor(
        private khuvucService: KhuvucService,
        private loaibdsService: LoaibdsService,
        private uploadService:UploadFilesService,
        private bdsService: BdscService,
        private fb :FormBuilder,
        private httpClient: HttpClient,
        private router: Router,
        private route: ActivatedRoute
    ){
        this.formCreateBDS=fb.group({
            phanloai: ['BDS Bán',Validators.required],
            loaibds: ['',Validators.required],
            khuvuc: ['',Validators.required],
            tenbds: ['',Validators.required],
            vithebds: ['',Validators.required],
            mota: ['',Validators.required],
            giabds: ['',Validators.required],
            congnang: ['',Validators.required],
            huong: ['',Validators.required],
            dientich:['',Validators.required],
            hotrovayvon:['',Validators.required],
            lienhe: ['',Validators.required],
            sodienthoai: ['',Validators.required],
            zalo:['',Validators.required]

        });
    }

    ngOnInit(): void {
        this.retrieveKhuvuc();
        this.retrieveLoadbds();
        this.fileInfos = this.uploadService.getFiles();
    }

    onSubmit(){
        const bds={
            phanloai: this.formCreateBDS.value.phanloai,
            loaibds: this.formCreateBDS.value.loaibds,
            khuvuc: this.formCreateBDS.value.khuvuc,
            tenbds: this.formCreateBDS.value.tenbds,
            vithebds: this.formCreateBDS.value.vithebds,
            mota: this.formCreateBDS.value.mota,
            giabds: this.formCreateBDS.value.giabds,
            dientich: this.formCreateBDS.value.dientich,
            congnang: this.formCreateBDS.value.congnang,
            hotrovayvon: this.formCreateBDS.value.hotrovayvon,
            huong: this.formCreateBDS.value.huong,
            lienhe:this.formCreateBDS.value.lienhe,
            sodienthoai:this.formCreateBDS.value.sodienthoai,
            zalo: this.formCreateBDS.value.zalo,
            image: this.nameImage
        }
        if(this.nameImage.length>0){
           this.bdsService.create(bds)
             .subscribe(data=>{
                 console.log(data);
                 this.submitted = true;

             },err=>{
                 console.log(err);
             })
            console.log(bds);

        }else{
            console.log("vui lòng chon image");
        }

        //console.log(bds);
    }

    newBDS(){
        this.submitted=false;
        this.message = [];
        this.progressInfos=[];
        this.formCreateBDS.reset();
    }

    //xac dinh tep tai len
    selectFiles(event:any): void {
        this.message = [];
        this.progressInfos = [];
        this.selectedFiles = event.target.files;

      }
    upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    
        if (file) {
            console.log(file);
            this.uploadService.upload(file).subscribe(
            (event: any) => {
                if (event.type === HttpEventType.UploadProgress) {
                this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
                } else if (event instanceof HttpResponse) {
                const msg = 'Uploaded the file successfully: ' + file.name;
                this.nameImage.push(file.name);
                this.message.push(msg);
                this.fileInfos = this.uploadService.getFiles();
                }
            },
            (err: any) => {
                this.progressInfos[idx].value = 0;
                const msg = 'Could not upload the file: ' + file.name;
                this.message.push(msg);
                this.fileInfos = this.uploadService.getFiles();
            });
        }
    }
    uploadFiles(): void {
        this.message = [];
      
        if (this.selectedFiles) {
          for (let i = 0; i < this.selectedFiles.length; i++) {
            this.upload(i, this.selectedFiles[i]);
            
          }
          
        }
        
    }

    retrieveLoadbds(): void {
        this.loaibdsService.getAll()
          .subscribe(
            data => {
              this.loaibds = data;
              console.log(data);
            },
            error => {
              console.log(error);
            });
    }
    retrieveKhuvuc(): void{
      this.khuvucService.getAll()
         .subscribe(data=>{
             this.khuvuc=data;
             console.log(data);
         },
          error=>{
              console.log(error);
          });
    }
}