import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./features/login/login.component";
import {ProductsComponent} from "./features/products/products.component";
import {HeroComponent} from "./features/hero/hero.component";
import {CartComponent} from "./features/cart/cart.component";
import {RegistrationComponent} from "./features/registration/registration.component";


const routes: Routes = [
  {path: '', component: HeroComponent},
  {path: 'product', loadChildren: () => import('./features/products/products.module').then(m =>m.ProductsModule)},
  {path: 'all-products', component: ProductsComponent},
  {path: 'cart-items', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
