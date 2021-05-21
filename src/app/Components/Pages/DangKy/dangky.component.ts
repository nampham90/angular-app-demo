import {
    NgModule,
    Component,
    OnInit,
    ViewChild,
    Directive,
    Inject,
    Input,
} from '@angular/core';
import { AbstractControl,FormBuilder, FormGroup,FormControl,Validators,ValidatorFn} from '@angular/forms';
import {NG_VALIDATORS} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {UserService} from '../../../Services/user.module';
import {Router,ActivatedRoute,ParamMap} from "@angular/router";

export function forbiddenUsername(c: AbstractControl){
    const users=['admin','manager'];
    return(users.includes(c.value))?{
           invalidusername: true
    }: null;
}

@Component({
    templateUrl: 'dangky.component.html',
    styleUrls: ['dangky.component.css'],
    selector: 'dangky'
})



export class DangKyComonent implements OnInit {
    public formCreateDangKy :FormGroup;
    submitted = false;
    constructor(
        private fb :FormBuilder,
        private userService : UserService,
        private router: Router
    ){
        this.formCreateDangKy=fb.group({
              username: ['',[Validators.required,forbiddenUsername]],
              password: ['',Validators.required],
              hoten: ['',Validators.required],
              sdt: ['',Validators.required],
              email:['',Validators.required]
        });
    }
    onSubmit():void{
       // console.log(this.formCreateDangKy);
        const user={
            username: this.formCreateDangKy.value.username,
            password: this.formCreateDangKy.value.password,
            hoten: this.formCreateDangKy.value.hoten,
            sdt: this.formCreateDangKy.value.sdt,
            email:this.formCreateDangKy.value.email
        }
        this.userService.create(user).subscribe(data=>{
            console.log(data);
            this.submitted=true;
        },err=>{
            console.log(err);
        });
       
    };

    ngOnInit():void{

    }
    
    newBDS(){
        this.submitted=false;
        this.formCreateDangKy.reset();
        this.router.navigate(['/dangnhap']);
    }
}