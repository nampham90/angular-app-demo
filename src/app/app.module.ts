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
import {UsersService} from '../app/StoreService/user.service';
import { LoginComponent } from './Components/Block/User/login/login.component';
import { LogoutComponent } from './Components/Block/User/logout/logout.component';
import { FooterComponent } from './Components/Block/footer/footer.component';
import { BDSBanComponent } from './Components/Block/bdsban/bdsban.component';
import { BDSThueComponent } from './Components/Block/bdsthue/bdsthue.component';
import { LienhedangtinComponent } from './Components/Block/lienhedangtin/lienhedangtin.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    TimkiemComponent,
    KhuVucComponent,
    AccountComponent,
    UserComponent,
    LoginComponent,
    LogoutComponent,
    FooterComponent,
    BDSBanComponent,
    BDSThueComponent,
    LienhedangtinComponent
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
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
