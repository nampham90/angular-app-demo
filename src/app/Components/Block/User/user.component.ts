import { analyzeAndValidateNgModules } from '@angular/compiler';
import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.css'],
    selector: 'user'
})

export class UserComponent implements OnInit{
    username:any;   
    constructor(
        private router:Router
    ){}
    ngOnInit():void{
       this.username=JSON.parse(localStorage.getItem('user')!).username;
    }
    logout():void{
       this.username=null;
       localStorage.removeItem('user');
      
       this.router.navigate(['/']);
      
    }
    reloadPage() {
        window.location.reload();
    }
}