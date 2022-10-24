import {Component, OnInit} from "@angular/core";
import {UserModel} from "../models/user.model";
import {AuthenticationService} from "../../core/_services/authentication.service";
import {UserService} from "../services/user.service";
import {LoginUserModel} from "../../core/_models/login-user.model";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {

  currentUser: UserModel;
  currentUserLoginInfo: LoginUserModel;

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService) {
    let id = this.authenticationService.currentUserValue.id.toString();
    this.currentUserLoginInfo = this.authenticationService.currentUserValue
    this.userService.getById(id).subscribe((data) => this.currentUser = data);
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.authenticationService.logout();
  }

}
