import { analyzeAndValidateNgModules } from '@angular/compiler';
import {Component,OnInit,Input} from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from '../../../StoreService/user.service';


@Component({
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.css'],
    selector: 'user'
})

export class UserComponent implements OnInit{
    @Input() username='';
    constructor(
        private router:Router,
        private usersService : UsersService
    ){}
    ngOnInit():void{
    }


}