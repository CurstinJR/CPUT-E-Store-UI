import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {HeroModule} from "../../../features/hero/hero.module";
import {CartModule} from "../../../features/cart/cart.module";
import {LoginModule} from "../../../features/login/login.module";
import {RegistrationModule} from "../../../features/registration/registration.module";
import {ProductsModule} from "../../../features/products/products.module";
import {DashboardLayoutComponent} from "./dashboard-layout/dashboard-layout.component";
import {UserProfileModule} from "../../../features/user-profile/user-profile.module";
import {OverviewModule} from "../../../features/admin-profile/overview/overview.module";
import {UserManagementModule} from "../../../features/admin-profile/user-management/user-management.module";
import {ProductManagementModule} from "../../../features/admin-profile/product-management/product-management.module";
import {OrderManagementModule} from "../../../features/admin-profile/order-management/order-management.module";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {path: "home", loadChildren: () => HeroModule},
      {path: "products", loadChildren: () => ProductsModule},
      {path: "cart", loadChildren: () => CartModule},
      {path: "login", loadChildren: () => LoginModule},
      {path: "register", loadChildren: () => RegistrationModule},
      {path: "user-profile", loadChildren: () => UserProfileModule}
    ]
  },
  {
    path: "",
    component: DashboardLayoutComponent,
    children: [
      {path: "admin-profile", loadChildren: () => OverviewModule},
      {path: "user-mgmt", loadChildren: () => UserManagementModule},
      {path: "product-mgmt", loadChildren: () => ProductManagementModule},
      {path: "order-mgmt", loadChildren: () => OrderManagementModule},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule {
}
