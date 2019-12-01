import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { VendorsignupComponent } from './vendorsignup/vendorsignup.component';
import { VendoreditComponent } from './vendoredit/vendoredit.component';
import { VendorinfoComponent } from './vendorinfo/vendorinfo.component';
import { DisplayPageComponent } from './display-page/display-page.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { OnlinebillsComponent } from './onlinebills/onlinebills.component';
import { BillpaymentdetailsComponent } from './billpaymentdetails/billpaymentdetails.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SuccesspageComponent } from './successpage/successpage.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';


const routes: Routes = [
  { path: 'login',component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'vendorlogin', component: VendorloginComponent},
  { path: 'vendorsignup', component: VendorsignupComponent},
  { path: 'edit', component: VendoreditComponent},
  { path: 'vendorinfo/:username', component: VendorinfoComponent},
  { path: 'appsearch', component: SearchComponentComponent},
  { path: 'billpayments/:username', component: BillpaymentdetailsComponent},
  { path: 'display', component: DisplayPageComponent},
  {path:'main',component:MainpageComponent},
  {path:'app-successpage',component:SuccesspageComponent},
  {path:'vendordetailss',component:VendorDetailsComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
