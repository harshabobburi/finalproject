import { Injectable } from '@angular/core';
import {SkillModel} from "./Skill.Model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SkillConfigService} from "../../config/Skill/skill-config.service";
import {Observable} from "rxjs";
import {MentorModel} from "../MentorModule/Mentor.Model";
import {map} from "rxjs/operators";
let httpHeader= new HttpHeaders({"Content-Type":"application/json"});

@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {
  private extractData(res:Response){
    let contents = res;
    return contents || {};
  }
  private MentorLoggedIn:MentorModel;
  constructor(private http:HttpClient,
              private  skillConfig:SkillConfigService) {
    this.MentorLoggedIn = JSON.parse(localStorage.getItem('MentorLoggedIn'))
  }

  // @ts-ignore
  getSkillAdded(skillFormData:SkillModel):Observable<SkillModel>{
    skillFormData.mentorId = this.MentorLoggedIn.mentorId;
    console.log(skillFormData.mentorId);
    return this.http.post<SkillModel>(this.skillConfig.getSkillAdded_URL(),skillFormData);
  }

  getSkillMentorwise():Observable<SkillModel>{
    // @ts-ignore
    console.log("getting skills of mentor");
    // @ts-ignore
    return this.http.get<SkillModel>((this.skillConfig.getMentorSkill_URL()+`/${this.MentorLoggedIn.mentorId}`));
  }
}
