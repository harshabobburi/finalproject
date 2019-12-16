import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage = null;

  constructor(private formBuild: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.setToken(null);
    this.userService.setRole(null);
    this.loginForm = this.formBuild.group({
      userId: ['', [
        Validators.required,
        Validators.maxLength(45),
        Validators.minLength(10),
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(3)
      ]]
    })
  }
  get userId() {
    return this.loginForm.get('userId');
  }
  get password() {
    return this.loginForm.get('password');
  }
  login(credentials: any) {
    this.userService.setToken(null);
    this.userService.setRole(null);
    this.userService.setDisplayName(null);
    this.userService.setCurrentUserName(null);
    this.userService.login(credentials["userId"], credentials["password"]).subscribe(
      (data) => {
        this.userService.setToken(data.token);
        this.userService.setRole(data.role);
        this.userService.setDisplayName(data.name);
        this.userService.setCurrentUserName(data.userName);        
        this.errorMessage = null;
        if (this.userService.getRole() == "ROLE_M") {
          this.userService.getCurrentUserFromDataBase();
          this.router.navigate(["/mentorHome"]);
        }
        else {
          this.router.navigate(["/search"]);
        }
      },
      (error) => {
        console.log(error);
        this.errorMessage = "Credentials Invalid";
      }
    )
  }
}
