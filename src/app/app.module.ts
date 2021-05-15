import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MenuComponent } from './Components/Block/Menu/menu.component';
import { SliderComponent } from './Components/Block/Slider/slider.component';
import {TimkiemComponent} from './Components/Block/TimKiem/timkiem.component';
import {KhuVucComponent}  from './Components/Block/KhuVuc/khuvuc.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    TimkiemComponent,
    KhuVucComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
