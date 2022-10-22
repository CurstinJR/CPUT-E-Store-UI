import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {LayoutsRoutingModule} from "./layouts-routing.module";
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {DashboardLayoutComponent} from "./dashboard-layout/dashboard-layout.component";
import {SharedModule} from "../../../shared/shared.module";
import {DashboardSidebarComponent} from '../dashboard-sidebar/dashboard-sidebar.component';
import {DashboardHeaderComponent} from '../dashboard-header/dashboard-header.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    NavbarComponent,
    FooterComponent,
    DashboardLayoutComponent,
    DashboardSidebarComponent,
    DashboardHeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SharedModule
  ]
})
export class LayoutsModule {
}
