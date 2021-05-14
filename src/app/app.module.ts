import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { MenuComponent } from './Components/Block/Menu/menu.component';
import { SliderComponent } from './Components/Block/Slider/slider.component';
import {TimkiemComponent} from './Components/Block/TimKiem/timkiem.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    TimkiemComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
