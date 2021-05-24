import { Component, OnInit,Input } from '@angular/core';
import {UsersService} from '../../../../StoreService/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  @Input() username='';
  constructor(
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
  }
  
  logout():void{
     this.usersService.remove();
     this.router.navigate(['/dangnhap'])
  }
}
