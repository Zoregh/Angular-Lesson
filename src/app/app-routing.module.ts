import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { FirstComponent } from './Components/first/first.component';



const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'users', component: FirstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
