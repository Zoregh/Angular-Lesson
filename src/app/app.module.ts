import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeneralService } from './Services/general.service';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitComponent } from './Components/fruit/fruit.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FirstComponent } from './Components/first/first.component';
import { SecondComponent } from './Components/second/second.component';
import { FruitsComponent } from './Components/fruits/fruits.component';
import { VegetablesComponent } from './Components/vegetables/vegetables.component';
import { VegetableComponent } from './Components/vegetable/vegetable.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductsComponent } from './Components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    NavbarComponent,
    FirstComponent,
    SecondComponent,
    FruitsComponent,
    VegetablesComponent,
    VegetableComponent,
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
