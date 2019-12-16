import { Injectable } from '@angular/core';
import {  Mentors } from './mentor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillserviceService {

  mentor:Mentors=null;
  constructor(private httpclient:HttpClient) { }

  getallskills():Observable<any>
  {
    return this.httpclient.get(environment.baseUrl+'authenticate-service/skills');
  }
}
