import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Mentor } from './Mentor';
import { Mentor_Skill } from './Mentor_Skill';
@Injectable({
  providedIn: 'root'
})
export class SkillService {

  zuulURL: string = environment.zuulURL;
  skillURL: string = this.zuulURL + "skill-microservice/";

  constructor(private http: HttpClient) { }

  getAllSkillsObservable(): Observable<any> {
    return this.http.get(this.skillURL + "skills");
  }

}
