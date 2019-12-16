import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup

  constructor(private formBuild:FormBuilder,private authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuild.group({
      username: ['',[
        Validators.required 
      ]],
      password: ['',[
        Validators.required
      ]]
    })
  }
  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }
  toSignup() {
    this.router.navigate(['signup'])
  }
  

}
