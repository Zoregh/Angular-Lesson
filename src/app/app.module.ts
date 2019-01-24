import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './Components/first/first.component';
import { FruitsComponent } from './Components/fruits/fruits.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FruitsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
