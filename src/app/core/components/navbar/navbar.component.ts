import {Component, OnInit} from "@angular/core";
import {AuthenticationService} from "../../_services/authentication.service";
import {AppIconModel} from "../../_models/app-icon.model";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";
import {LocalCartService} from "../../../features/services/local-cart.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {

  cartLength: number = 0;
  profile: AppIconModel = {
    icon: faCircleUser,
    size: "3x"
  }

  constructor(private authenticationService: AuthenticationService,
              private localCartService: LocalCartService) {
    this.getCartLength();
  }

  get isUserLoggedIn() {
    return this.authenticationService.currentUserValue;
  }

  ngOnInit(): void {
  }

  getCartLength() {
    this.localCartService.getAllCartItems().subscribe(data => {
      this.cartLength = data.length;
    })
  }

  public onLogout() {
    this.authenticationService.logout();
  }
}
