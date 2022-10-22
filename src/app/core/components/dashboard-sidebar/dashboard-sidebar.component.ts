import {Component, OnInit} from '@angular/core';
import {SizeProp} from "@fortawesome/fontawesome-svg-core";
import {MenuItemModel} from "../../_models/menu-item.model";
import {faBoxesStacked, faGrip, faScroll, faUsers} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent implements OnInit {

  iconSize: SizeProp = "2x";
  menuItems: MenuItemModel[] = [
    {
      icon: faGrip,
      name: "Dashboard",
      urlPath: "admin-profile",
    },
    {
      icon: faUsers,
      name: "Users",
      urlPath: "user-mgmt",
    },
    {
      icon: faBoxesStacked,
      name: "Products",
      urlPath: "product-mgmt",
    },
    {
      icon: faScroll,
      name: "Orders",
      urlPath: "order-mgmt",
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
