import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderManagementRoutingModule} from './order-management-routing.module';
import {OrderManagementComponent} from "./order-management.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    OrderManagementComponent
  ],
  imports: [
    CommonModule,
    OrderManagementRoutingModule,
    FontAwesomeModule
  ]
})
export class OrderManagementModule {
}
