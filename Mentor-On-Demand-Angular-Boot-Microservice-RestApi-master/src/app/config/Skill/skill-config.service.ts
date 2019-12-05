import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillConfigService {
  private API_URL = "http://localhost:8003/skill";

  getSkillAdded_URL():string{
    return (this.API_URL+"/add");
  }

  getMentorSkill_URL():string{
    return (this.API_URL+"/mentorSkill");
  }


  constructor() { }
}
