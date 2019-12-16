import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddskillsComponent } from './addskills/addskills.component';
import { MentordetailsComponent } from './mentordetails/mentordetails.component';
import { MainhomepageComponent } from './mainhomepage/mainhomepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MentormainpageComponent } from './mentormainpage/mentormainpage.component';
import { AddmentorskillsComponent } from './addmentorskills/addmentorskills.component';


const routes: Routes = [
  { path: 'login',component: LoginComponent},
  { path:'signup',component: SignupComponent},
  { path:'addskill',component: AddskillsComponent},
  { path:'mentordetail',component: MentordetailsComponent},
  { path:'mainpage',component: MainhomepageComponent},
  { path:'homepage',component: HomepageComponent},
  { path:'mentorpage',component: MentormainpageComponent},
  { path:'addmentorskill',component: AddmentorskillsComponent},



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
