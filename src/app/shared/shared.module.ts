import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {ProductCardComponent} from './components/product-card/product-card.component';
import {ProfileComponent} from "./components/profile/profile.component";
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
  declarations: [
    ProductCardComponent,
    ProfileComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterLinkWithHref,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    ProductCardComponent,
    ProfileComponent,
    CartItemComponent
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab, far);
  }
}
