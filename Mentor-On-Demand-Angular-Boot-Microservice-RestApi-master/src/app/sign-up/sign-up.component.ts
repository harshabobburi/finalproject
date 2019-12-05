import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../serviceModule/UserModule/user.service";
import {UserConfigService} from "../config/user/user-config.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[UserService]
})
export class SignUpComponent implements OnInit {
  userEnteredEmail='';
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
      this.userService.createUser(f.value)
        .subscribe((data)=>{
            console.log("User created")
        },(error)=>{
          console.log("Error in adding user")
        });

  }


}
