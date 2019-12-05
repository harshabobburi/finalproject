import { Component, OnInit } from '@angular/core';
import {observable} from "rxjs";
import {SkillModel} from "../../serviceModule/SkillModule/Skill.Model";
import {SkillServiceService} from "../../serviceModule/SkillModule/skill-service.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mentor-skill',
  templateUrl: './mentor-skill.component.html',
  styleUrls: ['./mentor-skill.component.css']
})
export class MentorSkillComponent implements OnInit {
  mentorSkillList: SkillModel[];

  constructor(private skillService:SkillServiceService,
              private routes:Router) { }

  ngOnInit() {
    this.getSkillList();
  }
  getSkillList(){
    this.skillService.getSkillMentorwise()
      .subscribe((data)=>{
        // @ts-ignore
        this.mentorSkillList = data;
        this.routes.navigate(['skills'])
      },(error)=>{
        console.log("No skill found")
      });
  }

}
