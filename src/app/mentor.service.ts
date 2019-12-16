import { Injectable } from '@angular/core';
import { Mentor } from './Mentor';
import { Observable } from 'rxjs';
import { Mentor_Skill } from './Mentor_Skill';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Skill } from './Skill';
import { USER } from './USER';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  

  zuulURL: string = environment.zuulURL;
  signupURL: string = this.zuulURL + "user-signup-microservice/";
  searchURL: string = this.zuulURL + "search-microservice/"
  mentor: Mentor = null;

  constructor(private http: HttpClient) { }

  addMentor(mentor: Mentor): Observable<any> {
    return this.http.post(this.signupURL + "addMentor", mentor);
  }
  addMentorSkill(mentorSkill: Mentor_Skill): Observable<any> {
    return this.http.post(this.signupURL + "addMentorSkill", mentorSkill);
  }
  findMentorBySkill(skill: Skill): Observable<any> {
    return this.http.post(this.searchURL + "mentorBySkill", skill);
  }
}
