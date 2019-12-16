import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './USER/register/register.component';
import { LoginComponent } from './USER/login/login.component';
import { MentorDetailsComponent } from './USER/mentor-details/mentor-details.component';
import { SkillGuardService } from './USER/skill-guard.service';
import { SearchComponent } from './search/search.component';
import { MentorHomeComponent } from './mentor-home/mentor-home.component';
import { MentorGuardService } from './mentor-home/mentor-guard.service';
import { AddSkillComponent } from './mentor-home/add-skill/add-skill.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'mentorDetails', component: MentorDetailsComponent, canActivate: [SkillGuardService] },
  { path: 'search', component: SearchComponent },
  { path: 'mentorHome', component: MentorHomeComponent, canActivate: [MentorGuardService]},
  { path: 'addSkill', component: AddSkillComponent, canActivate:[MentorGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
