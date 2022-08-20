import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserProfileRoutingModule} from './user-profile-routing.module';
import {UserProfileComponent} from "./user-profile.component";
import {UserMenuComponent} from "./user-menu/user-menu.component";
import {ViewPurchasesComponent} from "./view-purchases/view-purchases.component";
import {SharedModule} from "../../../shared/shared.module";
import {ProfileModule} from "../components/profile/profile.module";


@NgModule({
  declarations: [
    UserProfileComponent,
    UserMenuComponent,
    ViewPurchasesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserProfileRoutingModule,
    ProfileModule
  ]
})
export class UserProfileModule {
}
