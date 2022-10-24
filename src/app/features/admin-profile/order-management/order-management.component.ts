import {Component, OnInit} from "@angular/core";
import {OrderDetailService} from "../../services/order-detail.service";
import {OrderDetailsModel} from "../../models/order-details-model";
import {faEye, faTrash} from "@fortawesome/free-solid-svg-icons";
import {AppIconModel} from "../../../core/_models/app-icon.model";

@Component({
  selector: "app-order-management",
  templateUrl: "./order-management.component.html",
  styleUrls: ["./order-management.component.css"]
})
export class OrderManagementComponent implements OnInit {

  viewIcon: AppIconModel = {
    icon: faEye,
    size: "1x"
  }
  deleteIcon: AppIconModel = {
    icon: faTrash,
    size: "1x"
  }
  orderDetails: OrderDetailsModel[];

  constructor(private orderDetailService: OrderDetailService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.orderDetailService.getAll().subscribe((data) =>
      this.orderDetails = data);
  }
}
