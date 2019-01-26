import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitComponent } from './Components/fruit/fruit.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FirstComponent } from './Components/first/first.component';
import { SecondComponent } from './Components/second/second.component';
import { FruitsComponent } from './Components/fruits/fruits.component';
import { VegetablesComponent } from './Components/vegetables/vegetables.component';
import { VegetableComponent } from './Components/vegetable/vegetable.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    NavbarComponent,
    FirstComponent,
    SecondComponent,
    FruitsComponent,
    VegetablesComponent,
    VegetableComponent
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
