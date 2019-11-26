import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform: FormGroup;
  
  constructor(private formBuilder:FormBuilder,private userService:UserServiceService) { }

  ngOnInit() {
    this.signupform = this.formBuilder.group({
      userid : ['',[
        Validators.required,
        this.isUsernameTaken
      ]],
      firstname:['',[
        Validators.required
      ]],
      lastname:['',[
        Validators.required
      ]],
      Age: ['', [
        Validators.required
      ]],
      gender: ['', [
        Validators.required
      ]],
      contact: ['', [
        Validators.required
      ]],
      pannumber: ['', [
        Validators.required
      ]],
      aadharnumber: ['', [
        Validators.required
      ]],
      password:['',[
        Validators.required,Validators.minLength(4)
      ]],
      confirmPassword:['',[
        Validators.required,
        this.matchConfirmPassword.bind(this)
      ]]
    })
  }
  get userid() {
    return this.signupform.get('userid');
  }
  get firstname() {
    return this.signupform.get('firstname');
  }
  get lastname() {
    return this.signupform.get('lastname');
  }
  get Age() {
    return this.signupform.get('Age');
  }
  get gender() {
    return this.signupform.get('gender');
  }
  get contact() {
    return this.signupform.get('contact');
  }
  get pannumber() {
    return this.signupform.get('pannumber');
  }
  get aadharnumber() {
    return this.signupform.get('aadharnumber');
  }
  get password() {
    return this.signupform.get('password');
  }
  get confirmPassword() {
    return this.signupform.get('confirmPassword');
  }
  matchConfirmPassword(formControl: FormControl): { [s: string]: boolean } {
    if (this.signupform) {
      if (formControl.value && formControl.value.length > 0 && formControl.value !== this.signupform.get('password').value) {
        return { 'nomatch': true };
      }
    }
    return null;
  }
  isUsernameTaken(formControl: FormControl): { [s: string]: boolean } {
      if (formControl.value === 'admin') {
          return { 'userNameTaken': true };
        } else {
          return null;
        }
      }
  

}
