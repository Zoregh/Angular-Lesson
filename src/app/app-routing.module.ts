import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { FirstComponent } from './Components/first/first.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { Page404Component } from './Components/page404/page404.component';
import { LoggedGuard } from './Guards/logged.guard';




const routes: Routes = [
  {path: '', component: ProductsComponent },
  // {path: '', redirectTo: '/ProductsComponent', pathMatch: 'Full'},
  {path: 'users', component: FirstComponent, canActivate: [LoggedGuard]},
  {path: 'product/:id', component: ProductDetailsComponent},
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
