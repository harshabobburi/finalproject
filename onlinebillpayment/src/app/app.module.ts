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
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    VendorloginComponent,
    VendorsignupComponent,
    VendoreditComponent,
    VendorinfoComponent
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
