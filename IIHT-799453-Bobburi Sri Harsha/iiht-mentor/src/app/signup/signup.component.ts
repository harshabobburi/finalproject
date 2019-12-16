import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform: FormGroup;
  roles=["User","Mentor"];
  constructor(private formBuilder:FormBuilder,private route:Router,private userService:UsersService) { }

  ngOnInit() {
    this.signupform = this.formBuilder.group({
      userName : ['',[
        Validators.required
      ]],
      firstName:['',[
        Validators.required
      ]],
      lastName:['',[
        Validators.required
      ]],
      password:['',[
        Validators.required,Validators.minLength(8)
      ]],
      confirmPassword:['',[
        Validators.required,
        this.matchConfirmPassword.bind(this)
      ]],
      role:['',[Validators.required]],
      // regCode:['',[Validators.required]],
      // linkedinUrl:['',[Validators.required]],
      // yearsOfExperience:['',[Validators.required]],
      contactNumber:['',[Validators.required,Validators.min(1000000000),Validators.maxLength(9999999999)]],
    })

  }
  get userName() {
    return this.signupform.get('userName');
  }
  get firstName() {
    return this.signupform.get('firstName');
  }
  get lastName() {
    return this.signupform.get('lastName');
  }
  get password() {
    return this.signupform.get('password');
  }
  get confirmPassword() {
    return this.signupform.get('confirmPassword');
  }
  get contactNumber() {
    return this.signupform.get('contactNumber');
  }
  get role() {
    return this.signupform.get('role')
  }
  // get linkedinUrl(){
  //   return this.signupform.get('linkedinUrl')
  // }
  // get yearsOfExperience(){
  //   return this.signupform.get('yearsOfExperience')
  // }
  // get regCode(){
  //   return this.signupform.get('regCode')
  // }


  matchConfirmPassword(formControl: FormControl): { [s: string]: boolean } {
    if (this.signupform) {
      if (formControl.value && formControl.value.length > 0 && formControl.value !== this.signupform.get('password').value) {
        return { 'nomatch': true };
      }
    }
    return null;
  }
  
      tologin() {
        this.route.navigate(['login'])
      }
  
}
