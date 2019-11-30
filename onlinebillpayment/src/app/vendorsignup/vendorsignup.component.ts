import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';
import { VendorServiceService } from '../vendor-service.service';

@Component({
  selector: 'app-vendorsignup',
  templateUrl: './vendorsignup.component.html',
  styleUrls: ['./vendorsignup.component.css']
})
export class VendorsignupComponent implements OnInit {

  signupform: FormGroup;
  vendortype=["Electricity","Telephone","DTH","Insurance","Tax","Credit Card","Loan account","Others"];
  addresstype=["Dlf","Kukatpally","L B Nagar"];
  countrytype=["India","England","Australia","West Indies"];
  statetype=["Andhra Pradesh","Telangana","Kerala","Tamil Nadu","Karnataka"];
  paymentgatewaytype=["Debit/Credit Card","Paytm","Googlepay"];
  constructor(private formBuilder:FormBuilder,private vendorService:VendorServiceService,private router:Router) { }

  ngOnInit() {
    this.signupform = this.formBuilder.group({
      username : ['',[
        Validators.required,
        this.isUsernameTaken
      ]],
      registration_no:['',[
        Validators.required
      ]],
      vendor_type:['',[
        Validators.required
      ]],
      address: ['', [
        Validators.required
      ]],
      country: ['', [
        Validators.required
      ]],
      state: ['', [
        Validators.required
      ]],
      vendor_email: ['', [
        Validators.required
      ]],
      contact_number: ['', [
        Validators.required
      ]],
      website: ['', [
        Validators.required
      ]],
      certificate_issue_date: ['', [
        Validators.required
      ]],
      cert_validity_date: ['', [
        Validators.required
      ]],
      year_establishment: ['', [
        Validators.required
      ]],
      vendor_name: ['', [
        Validators.required
      ]],
      payment_gateway: ['', [
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
  get username() {
    return this.signupform.get('username');
  }
  get registration_no() {
    return this.signupform.get('registration_no');
  }
  get vendor_type() {
    return this.signupform.get('vendor_type');
  }
  get address() {
    return this.signupform.get('address');
  }
  get country() {
    return this.signupform.get('country');
  }
  get state() {
    return this.signupform.get('state');
  }
  get vendor_email() {
    return this.signupform.get('vendor_email');
  }
  get contact_number() {
    return this.signupform.get('contact_number');
  }
  get website() {
    return this.signupform.get('website');
  }
  get certificate_issue_date() {
    return this.signupform.get('certificate_issue_date');
  }
  get cert_validity_date() {
    return this.signupform.get('cert_validity_date');
  }
  get year_establishment() {
    return this.signupform.get('year_establishment');
  }
  get payment_gateway() {
    return this.signupform.get('payment_gateway');
  }
  get vendor_name() {
    return this.signupform.get('vendor_name');
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
      tologin() {
        this.router.navigate(['vendorlogin'])
      }
      // addvendorUser(vendor:any)
      // {
      //   let NewUsers:vendor={vendor_name:vendor["vendor_name"],registration_no:vendor["registration_no"],vendor_type:vendor["vendor_type"],address:vendor["address"],country:vendor["country"],state:vendor["state"],vendor_email:vendor["vendor_email"],contact_number:vendor["contact_number"],password:vendor["password"],website:vendor["website"],certificate_issue_date:vendor["certificate_issue_date"],cert_validity_date:vendor["cert_validity_date"],year_establishment:vendor["year_establishment"],payment_gateway:vendor["payment_gateway"],username:vendor["username"]}
      //   this.addvendorUser(NewUsers).subscribe(data=>{
      //     this.userExists=data;
      //     if(data)
      //     {
            
      //       this.router.navigate(['login'])
      //     }
      //   },
      //   (error)=>{
      //     this.userExists=true;
      //     console.log(error)
      //   }
      //   )
      // }


}
