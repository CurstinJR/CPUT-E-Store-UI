import {Component, OnInit} from "@angular/core";
import {UserModel} from "../models/user.model";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {

  currentUser: UserModel = {
    email: "quinn@email.com",
    firstName: "Quinn",
    lastName: "Frost",
    createdAt: new Date()
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
