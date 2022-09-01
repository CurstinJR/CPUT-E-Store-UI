import { Component, OnInit } from '@angular/core';
import {UserService} from "./services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private userService: UserService, private route:Router) { }

  ngOnInit(): void {
  }
  getLoginData(){
    let email = document.getElementById("uname") as HTMLInputElement
    let password = document.getElementById("psw") as HTMLInputElement

    console.log(email.value)
    console.log(password.value)

    // this.userService.login(email?.value,password?.value).subscribe( response =>{
    //   if(response != null){
    //     this.route.navigate(['/'])
    //   }else{
    //
    //   }
    // })

  }

}
