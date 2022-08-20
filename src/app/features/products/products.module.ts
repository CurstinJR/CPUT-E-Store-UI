import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from "./products.component";
import {ProductComponent} from "./pages/product/product.component";
import {ApparelsComponent} from "./pages/apparels/apparels.component";
import {AccessoriesComponent} from "./pages/accessories/accessories.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ApparelsComponent,
    AccessoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule {
}
