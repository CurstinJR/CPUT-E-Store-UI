import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from "../components/profile/profile.component";
import {AdminProfileComponent} from "./admin-profile.component";
import {UserManagementComponent} from "./user-management/user-management.component";
import {ProductManagementComponent} from "./product-management/product-management.component";
import {OrderManagementComponent} from "./order-management/order-management.component";

const routes: Routes = [
  {
    path: 'admin-profile', component: AdminProfileComponent,
    children: [
      {path: '', component: ProfileComponent},
      {path: 'users', component: UserManagementComponent},
      {path: 'products', component: ProductManagementComponent},
      {path: 'orders', component: OrderManagementComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminProfileRoutingModule {
}
