import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


import { MenuComponent } from './Components/Block/Menu/menu.component';
import { SliderComponent } from './Components/Block/Slider/slider.component';
import {TimkiemComponent} from './Components/Block/TimKiem/timkiem.component';
import {KhuVucComponent}  from './Components/Block/KhuVuc/khuvuc.component';
import {AccountComponent} from './Components/Block/Account/account.component';
import {UserComponent} from './Components/Block/User/user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// For MDB Angular Pro
import { NavbarModule, WavesModule, DropdownModule } from 'ng-uikit-pro-standard';
// For MDB Angular Free

import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    TimkiemComponent,
    KhuVucComponent,
    AccountComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,
    AppRoutingModule,
    NgbModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    NavbarModule,
    WavesModule,
    DropdownModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
