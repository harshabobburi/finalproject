import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../serviceModule/UserModule/user.service";
import {UserModel} from "../serviceModule/UserModule/user.model";
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService :UserService,
              private router : Router) { }

  ngOnInit() {
  }

  onSubmit(userLoginForm: NgForm) {
        this.userService.loginUser(userLoginForm.value)
          .subscribe((data)=>{
              localStorage.setItem('isUserLoggedIn','true');
              localStorage.setItem('UserLoggedIn',JSON.stringify(data));
              this.router.navigate(['userpage']).then(()=>{
                console.log("Navigated to user home page")
              });
          },
            (error)=> {
              console.log(error)
          });
  }
}
