import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { VendorsignupComponent } from './vendorsignup/vendorsignup.component';
import { VendoreditComponent } from './vendoredit/vendoredit.component';
import { VendorinfoComponent } from './vendorinfo/vendorinfo.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { DisplayPageComponent } from './display-page/display-page.component';
import { OnlinebillsComponent } from './onlinebills/onlinebills.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { BillpaymentdetailsComponent } from './billpaymentdetails/billpaymentdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    VendorloginComponent,
    VendorsignupComponent,
    VendoreditComponent,
    VendorinfoComponent,
    VendorDetailsComponent,
    DisplayPageComponent,
    OnlinebillsComponent,
    SearchComponentComponent,
    BillpaymentdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
