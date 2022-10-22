import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  overviews: { name: string, urlPath: string }[] = [
    {
      name: "Users",
      urlPath: "user-mgmt"
    },
    {
      name: "Products",
      urlPath: "product-mgmt"
    },
    {
      name: "Orders",
      urlPath: "order-mgmt"
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
