import {Component,OnInit} from '@angular/core';

import { AbstractControl,FormBuilder, FormGroup,FormControl,Validators,ValidatorFn} from '@angular/forms';
import {UserService} from '../../../Services/user.module';
import {Router,ActivatedRoute,ParamMap} from "@angular/router";
@Component({
     templateUrl: 'dangnhap.component.html',
     styleUrls: ['dangnhap.component.css'],
     selector: 'dangnhap'

})

export class DanhNhapComponent implements OnInit {
    message:any;
    submitted =false;
    formCreateDangNhap: FormGroup;
    constructor(
         private userService: UserService,
         private router: Router,
         private fb: FormBuilder

    ){
        this.formCreateDangNhap=fb.group({
               username:['',Validators.required],
               password:['',Validators.required]
        });
    }

    ngOnInit(): void{
        // console.log(sessionStorage.getItem('user'));
       //  console.log(JSON.parse(localStorage.getItem('user')!).username);
      }

    onSubmit():void{
        //console.log(this.formCreateDangNhap);
        const login={
            username: this.formCreateDangNhap.value.username,
            password: this.formCreateDangNhap.value.password
        }
        this.userService.login(login.username,login.password).subscribe(data=>{
            console.log(data);
            let User={
                username: data[0].username,
                password: data[0].password
            }
           // sessionStorage.setItem('user',JSON.stringify(User));
           if(User.username){
                localStorage.setItem('user',JSON.stringify(User));
                this.router.navigate(['/']);
           }

        },error=>{
            this.message="Mật Khẩu hoặc Username không đúng !"
            console.error(error.message);
        })
        
    }

}