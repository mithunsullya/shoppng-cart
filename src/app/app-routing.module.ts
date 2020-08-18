import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {ProductCartComponent} from './product-cart/product-cart.component';

const routes: Routes = [
{ path: '', component: HomepageComponent },
{ path: 'cart', component: ProductCartComponent },

{ path: 'products/:id', loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
