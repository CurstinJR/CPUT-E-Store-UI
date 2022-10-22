import {Component, Input, OnInit} from "@angular/core";
import {UserModel} from "../../../features/models/user.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {

  @Input()
  currentUser: UserModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
