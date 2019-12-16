import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MentordetailsComponent } from './mentordetails/mentordetails.component';
import { AddskillsComponent } from './addskills/addskills.component';
import { MainhomepageComponent } from './mainhomepage/mainhomepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MentormainpageComponent } from './mentormainpage/mentormainpage.component';
import { AddmentorskillsComponent } from './addmentorskills/addmentorskills.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    MentordetailsComponent,
    AddskillsComponent,
    MainhomepageComponent,
    HomepageComponent,
    MentormainpageComponent,
    AddmentorskillsComponent
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
