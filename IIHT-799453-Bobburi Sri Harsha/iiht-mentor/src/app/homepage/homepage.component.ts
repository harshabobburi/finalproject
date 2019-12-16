import { Component, OnInit } from '@angular/core';
import { skill } from '../services/skill';
import { mentorskill } from '../services/mentorskill';
import { SkillserviceService } from '../services/skillservice.service';
import { MentorserviceService } from '../services/mentorservice.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  skillList: skill[];
  skillSearchKey:string;
  mentorList:mentorskill[];
  moreInfoMentorId:number = null;
  cname:string=null;
  

  constructor(private skillservice:SkillserviceService, private mentorservice:MentorserviceService,private authService:AuthenticationService ) { }

  ngOnInit() {
    this.moreInfoMentorId = null;
    this.skillSearchKey = null;
    this.skillList = [];
    this.skillservice.getallskills().subscribe(
      (data)=>{
        this.skillList = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  searchBySkill() {
    let skill:skill = this.skillList.find(skill => skill.name == this.skillSearchKey)
    this.mentorservice.findmentor(skill).subscribe(
      (data)=>{
        this.mentorList = data;   
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

  moreDetails(mentorskill:mentorskill) {
    // this.moreInfoMentorId = mentorId;

    this.cname=mentorskill.mentor.linkedinUrl;
  }

}
