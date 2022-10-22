import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {ProductCardComponent} from './components/product-card/product-card.component';
import {ProfileComponent} from "./components/profile/profile.component";

@NgModule({
  declarations: [
    ProductCardComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    ProductCardComponent,
    ProfileComponent
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab, far);
  }
}
