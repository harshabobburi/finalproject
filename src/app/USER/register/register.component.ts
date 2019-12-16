import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SkillService } from 'src/app/skill.service';
import { USER } from 'src/app/USER';
import { MentorService } from 'src/app/mentor.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  userExists: boolean = false;

  constructor(private formBuild: FormBuilder, private userService: UserService, private router: Router, private mentorService: MentorService) { }

  ngOnInit() {
    this.mentorService.mentor = null;
    this.userExists = false;
    this.registrationForm = this.formBuild.group({
      email: ['', [
        Validators.required,
        Validators.maxLength(45),
        Validators.minLength(10),
        Validators.email
      ]],
      firstname: ['', [
        Validators.required,
        Validators.maxLength(45),
        Validators.minLength(3)
      ]],
      lastname: ['', [
        Validators.required,
        Validators.maxLength(45),
        Validators.minLength(3)
      ]],
      type: ['', [
        Validators.required
      ]],
      contact: ['', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern("[0-9]*")
      ]],
      confirmpassword: ['', [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(3),
        this.matchConfirmPassword.bind(this)
      ]],
      password: ['', [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(3)
      ]],
    })
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get firstname() {
    return this.registrationForm.get('firstname');
  }
  get type() {
    return this.registrationForm.get('type');
  }
  get contact() {
    return this.registrationForm.get('contact');
  }
  get lastname() {
    return this.registrationForm.get('lastname');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  get confirmpassword() {
    return this.registrationForm.get('confirmpassword');
  }
  matchConfirmPassword(formControl: FormControl): { [s: string]: boolean } {
    if (this.registrationForm) {
      if (formControl.value && formControl.value.length > 0 && formControl.value !== this.registrationForm.get('password').value) {
        return { 'nomatch': true };
      }
    }
    return null;
  }
  register(formData: any) {
    this.userExists = false;
    let user: USER;
    user = {
      contactNumber: formData["contact"], firstName: formData["firstname"], id: null, lastName: formData["lastname"],
      password: formData["password"], resetPassword: false, resetPasswordDate: null, userName: formData["email"],
      role: formData["type"]
    }
    this.userService.register(user).subscribe(
      (data) => {
        window.alert("Your details are submitted successfully");
        if (user.role == "ROLE_U")
          this.router.navigate(['/login']);
        else if (user.role == "ROLE_M") {
          this.router.navigate(['/mentorDetails']);
          this.mentorService.mentor = { linkedinURL: '', timeslot: '', user: user, id: null, yearsOfExperience: 0 };
        }
      },
      (error) => {
        console.log(error);
        if (error.error.message == "UserName is already in use") {
          this.userExists = true;
        }
      }
    );
  }
}
