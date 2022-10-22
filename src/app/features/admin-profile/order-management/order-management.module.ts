import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderManagementRoutingModule} from './order-management-routing.module';
import {OrderManagementComponent} from "./order-management.component";


@NgModule({
  declarations: [
    OrderManagementComponent
  ],
  imports: [
    CommonModule,
    OrderManagementRoutingModule
  ]
})
export class OrderManagementModule {
}
