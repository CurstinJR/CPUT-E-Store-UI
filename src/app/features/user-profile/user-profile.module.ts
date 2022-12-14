import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {UserProfileRoutingModule} from "./user-profile-routing.module";
import {UserProfileComponent} from "./user-profile.component";
import {ViewPurchasesComponent} from "./view-purchases/view-purchases.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    UserProfileComponent,
    ViewPurchasesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule {
}
