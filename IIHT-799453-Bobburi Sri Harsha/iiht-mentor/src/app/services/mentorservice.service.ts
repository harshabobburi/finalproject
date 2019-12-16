import { Injectable } from '@angular/core';
import {  Mentors } from './mentor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { mentorskill } from './mentorskill';
import { skill } from './skill';

@Injectable({
  providedIn: 'root'
})
export class MentorserviceService {

  mentor:Mentors=null;
  constructor(private httpclient:HttpClient) { }


  addmentor(mentor:Mentors):Observable<any>
  {
    return this.httpclient.post(environment.baseUrl+'authenticate-service/mentor/addmentordetails',mentor)
  }

  addmentorskills(mentorskill:mentorskill):Observable<any>
  {
    console.log(mentorskill)
    return this.httpclient.post<any>(environment.baseUrl+'authenticate-service/mentor/addmentorskills',mentorskill)
  }
  findmentor(skill:skill):Observable<any> {
    return this.httpclient.post(environment.baseUrl+'search-service/search',skill);
  }
}
