import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillserviceService } from '../services/skillservice.service';
import { MentorserviceService } from '../services/mentorservice.service';
import { mentorskill } from '../services/mentorskill';
import { skill } from '../services/skill';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-addskills',
  templateUrl: './addskills.component.html',
  styleUrls: ['./addskills.component.css']
})
export class AddskillsComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private skillService:SkillserviceService,private mentorservice:MentorserviceService, private userService:UsersService) { }
  signupform:FormGroup;
  skillList:skill[] = [];
  // skillLists:["JAVA","PHP","SPRING"]

  ngOnInit() {
    this.buildsignupForm()
    this.skillList=[];
    this.skillService.getallskills().subscribe(data=>{
      this.skillList=data;
    })
  }

  

  buildsignupForm(){
    this.signupform = this.fb.group({
      skill:['',[
        Validators.required
      ]],
      selfRating:['',[
        Validators.required,
        Validators.max(10)]],
        yearsOfExperience: ['', [
        Validators.required]],
    })
  }
  get skill() {
    return this.signupform.get('skill');
  }
  get selfRating() {
    return this.signupform.get('selfRating');
  }
  get yearsOfExperience() {
    return this.signupform.get('yearsOfExperience');
  }

  addSkill(skillform:any){
    let mentorSkill:mentorskill={mentor:this.userService.mentor,selfRating:skillform['selfRating'],yearsOfExperience:skillform['yearsOfExperience'],
                                    skill:this.skillList.find(skill=>skill.name == skillform["skill"])}
    this.mentorservice.addmentorskills(mentorSkill).subscribe(data=>{
      this.buildsignupForm();
    })

}
}