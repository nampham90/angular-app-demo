import { TypeCheckScopeRegistry } from '@angular/compiler-cli/src/ngtsc/scope';
import { Component } from '@angular/core';
import { UserService } from './Services/user.module';
import {UsersService} from './StoreService/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username="";
  userlogin="";
  constructor(
    private usersService: UsersService
  ){
    
    this.username=this.usersService.getUser().username;
    if(!this.username){
         this.username=this.userlogin;
    }
  }
  title = 'angular-app-demo';

  login(newItem: any) {
    this.userlogin=newItem;
  }



}
