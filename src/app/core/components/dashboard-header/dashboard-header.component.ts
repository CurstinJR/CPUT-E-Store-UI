import {Component, OnInit} from '@angular/core';
import {AppIconModel} from "../../_models/app-icon.model";
import {faCircleUser} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {

  profile: AppIconModel = {
    icon: faCircleUser,
    size: "3x"
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
