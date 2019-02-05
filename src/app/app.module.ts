import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeneralService } from './Services/general.service';
import { RouterModule } from '@angular/router';
import { LoggedGuard } from './Guards/logged.guard'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FirstComponent } from './Components/first/first.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { Page404Component } from './Components/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirstComponent,
    ProductComponent,
    ProductsComponent,
    ProductDetailsComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [GeneralService, LoggedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
