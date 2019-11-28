import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { VendorsignupComponent } from './vendorsignup/vendorsignup.component';
import { VendoreditComponent } from './vendoredit/vendoredit.component';
import { VendorinfoComponent } from './vendorinfo/vendorinfo.component';


const routes: Routes = [
  { path: 'login',component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'vendorlogin', component: VendorloginComponent},
  { path: 'vendorsignup', component: VendorsignupComponent},
  { path: 'edit', component: VendoreditComponent},
  { path: 'vendorinfo', component: VendorinfoComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
