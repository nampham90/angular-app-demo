import {Component,OnInit} from "@angular/core";
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
    templateUrl: 'menu.component.html',
    selector:'menu',
    styleUrls:["menu.component.css"],
    providers: [NgbPaginationModule,NgbAlertModule]

})

export class MenuComponent implements OnInit{
    username:any;

    constructor(){}
    ngOnInit(): void {
        // this.username=JSON.parse(localStorage.getItem('user')!).username;    
    }

}