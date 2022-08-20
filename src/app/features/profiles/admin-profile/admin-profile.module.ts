import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminProfileRoutingModule} from './admin-profile-routing.module';
import {AdminProfileComponent} from "./admin-profile.component";
import {AdminMenuComponent} from "./admin-menu/admin-menu.component";
import {UserManagementComponent} from './user-management/user-management.component';
import {ProductManagementComponent} from './product-management/product-management.component';
import {OrderManagementComponent} from './order-management/order-management.component';
import {SharedModule} from "../../../shared/shared.module";
import {ProfileModule} from "../components/profile/profile.module";


@NgModule({
  declarations: [
    AdminProfileComponent,
    AdminMenuComponent,
    UserManagementComponent,
    ProductManagementComponent,
    OrderManagementComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminProfileRoutingModule,
    ProfileModule
  ]
})
export class AdminProfileModule {
}
