import {NgModule} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSliderModule } from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
//import {DemoMaterialModule} from './Components/Pages/Home/material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CateComponent } from './Components/Pages/Cate/cate.component';
import { DetailComponent } from './Components/Pages/Detail/detail.component';
import { HomeComponent } from './Components/Pages/Home/home.component';
import { TinTucComponent} from './Components/Pages/TinTuc/tintuc.component';
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
    {path: 'tintuc',component:TinTucComponent},
    {path: 'cate',component:CateComponent},
    {path:'**',component:HomeComponent}


]

@NgModule({
    declarations:[
      HomeComponent,DetailComponent,CateComponent,
      TimkiemNangCaoComponent,AddbdsComponent,TinTucComponent
     //KhuVucTimKiemComponent,,
     // 
      
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
        NgbPaginationModule, NgbAlertModule,
        BrowserModule,
        MatIconModule,
        NgbModule

    ],
    entryComponents: [HomeComponent],
    bootstrap: [HomeComponent],
    providers: [
      { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{}
