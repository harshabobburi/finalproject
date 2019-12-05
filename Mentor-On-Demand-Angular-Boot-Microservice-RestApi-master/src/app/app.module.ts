import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutComponent } from './about/about.component';
import { MentorSearchComponent } from './mentor-search/mentor-search.component';
import { MentorDetailComponent } from './mentor-search/mentor-detail/mentor-detail.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MentorSignUpComponent } from './mentor-sign-up/mentor-sign-up.component';
import { DropDownDirectiveDirective } from './Direcitves/DropDown/drop-down-directive.directive';
import { MentorLoginComponent } from './mentor-login/mentor-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MentorListComponent } from './mentor-search/mentor-list/mentor-list.component';
import { MentorItemComponent } from './mentor-search/mentor-list/mentor-item/mentor-item.component';
import { MentorDashboardComponent } from './mentor-dashboard/mentor-dashboard.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MentorSkillComponent } from './mentor-dashboard/mentor-skill/mentor-skill.component';
import { NewSkillComponent } from './mentor-dashboard/mentor-skill/new-skill/new-skill.component';
import { ExistingSkillComponent } from './mentor-dashboard/mentor-skill/existing-skill/existing-skill.component';
import { UserProposalComponent } from './mentor-dashboard/user-proposal/user-proposal.component';
import { PaymentComponent } from './mentor-dashboard/payment/payment.component';
import { MentorConnectionComponent } from './user-dashboard/mentor-connection/mentor-connection.component';


const routes: Routes = [
  { path : '' , component : HomeComponent},
  { path : 'mentor' , component : MentorSearchComponent},
  { path : 'login' , component : LoginComponent},
  { path : 'mentorLogin' , component : MentorLoginComponent},
  { path : 'about' , component : AboutComponent},
  { path : 'userSignUp' , component : SignUpComponent},
  { path : 'mentorSignUp' , component : MentorSignUpComponent},
  { path : 'userpage' , component : UserDashboardComponent},
  { path : 'mentorpage' , component :MentorDashboardComponent},
  { path : 'skills' , component : MentorSkillComponent},
  { path : 'students' , component : UserProposalComponent},
  { path : 'payments' , component : PaymentComponent},
  { path : 'connections' , component : MentorConnectionComponent}

];
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    AboutComponent,
    MentorSearchComponent,
    MentorDetailComponent,
    MentorSignUpComponent,
    DropDownDirectiveDirective,
    MentorLoginComponent,
    UserDashboardComponent,
    MentorListComponent,
    MentorItemComponent,
    MentorDashboardComponent,
    SearchBarComponent,
    MentorSkillComponent,
    NewSkillComponent,
    ExistingSkillComponent,
    UserProposalComponent,
    PaymentComponent,
    MentorConnectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
