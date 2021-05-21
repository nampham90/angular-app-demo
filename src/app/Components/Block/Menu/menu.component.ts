import {Component,OnInit} from "@angular/core";

@Component({
    templateUrl: 'menu.component.html',
    selector:'menu',
    styleUrls:["menu.component.css"]

})

export class MenuComponent implements OnInit{
    username:any;

    constructor(){}
    ngOnInit(): void {
        // this.username=JSON.parse(localStorage.getItem('user')!).username;    
    }

}