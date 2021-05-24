import {Component,EventEmitter,OnInit, Output} from '@angular/core';

import { AbstractControl,FormBuilder, FormGroup,FormControl,Validators,ValidatorFn} from '@angular/forms';
import {UserService} from '../../../Services/user.module';
import {Router,ActivatedRoute,ParamMap} from "@angular/router";
import {UsersService} from '../../../StoreService/user.service';
import { TypeCheckScopeRegistry } from '@angular/compiler-cli/src/ngtsc/scope';

@Component({
     templateUrl: 'dangnhap.component.html',
     styleUrls: ['dangnhap.component.css'],
     selector: 'dangnhap'

})

export class DanhNhapComponent implements OnInit {
    message:any;
    submitted =false;
    formCreateDangNhap: FormGroup;
    @Output() newItemEvent = new EventEmitter<string>();
    constructor(
         private userService: UserService,
         private usersService: UsersService,
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
                this.usersService.addUser(User.username,User.password);
                this.addNewItem(User.username);
                this.router.navigate(['/']);
           }

        },error=>{
            this.message="Mật Khẩu hoặc Username không đúng !"
            console.error(error.message);
        })
        
    }

   

    addNewItem(value: string) {
      this.newItemEvent.emit(value);
    }



}