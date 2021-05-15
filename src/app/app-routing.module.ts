import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSliderModule } from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
//import {DemoMaterialModule} from './Components/Pages/Home/material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import { CateComponent } from './Components/Pages/Cate/cate.component';
import { DetailComponent } from './Components/Pages/Detail/detail.component';
import { HomeComponent } from './Components/Pages/Home/home.component';
//import { KhuVucTimKiemComponent} from './Components/Pages/KhuVucTimKiem/khuvuctimkiem.component';

import { TimkiemNangCaoComponent } from './Components/Pages/TimKiemNangCao/timkiem.component';
import { AddbdsComponent} from './Components/Pages/Addbds/Addbds.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';




const routesConfig:Routes=[
    {path:'khuvuc/:khuvuc',component:CateComponent },
    {path:'bds/chitietbds/:id',component:DetailComponent},
   // {path:'khuvuctimkiem/:khuvuc',component:KhuVucTimKiemComponent},
    {path:'timkiemnangcao',component: TimkiemNangCaoComponent},
    {path:'addbds', component:AddbdsComponent},
    {path: 'detail',component:DetailComponent},
    {path: 'cate',component:CateComponent},
    {path:'**',component:HomeComponent}


]

@NgModule({
    declarations:[
      HomeComponent,DetailComponent,CateComponent,
      TimkiemNangCaoComponent
     //KhuVucTimKiemComponent,,
     // AddbdsComponent
      
    ],
    imports:[

        RouterModule.forRoot(routesConfig),
        CommonModule,
        NgxPaginationModule,
        MatProgressBarModule,
        //DemoMaterialModule,
        MatSliderModule,
        FormsModule,
        ReactiveFormsModule,
        NgbPaginationModule, NgbAlertModule

    ],
    entryComponents: [HomeComponent],
    bootstrap: [HomeComponent],
    providers: [
      { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{}
