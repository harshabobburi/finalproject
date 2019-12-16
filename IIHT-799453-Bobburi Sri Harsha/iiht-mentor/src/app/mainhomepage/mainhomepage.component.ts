import { Component, OnInit } from '@angular/core';
import { skill } from '../services/skill';
import { mentorskill } from '../services/mentorskill';
import { SkillserviceService } from '../services/skillservice.service';
import { MentorserviceService } from '../services/mentorservice.service';
import { AuthenticationService } from '../services/authentication.service';
import { UsersService } from '../services/users.service';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { training } from '../services/training';
import { TraningServiceService } from '../services/training-service.service';

@Component({
  selector: 'app-mainhomepage',
  templateUrl: './mainhomepage.component.html',
  styleUrls: ['./mainhomepage.component.css']
})
export class MainhomepageComponent implements OnInit {

  skillList: skill[];
  skillSearchKey:string;
  mentorList:mentorskill[];
  moreInfoMentorId:number = null;
  cname:string=null;
  requestTrainingMentorId:number = null;
  requestTrainingForm:FormGroup;
  errorMessage:string=null;
  // trainingService: any;
  

  constructor(private skillservice:SkillserviceService, private mentorservice:MentorserviceService,private authService:AuthenticationService,private userService:UsersService,private formBuilder:FormBuilder,private trainingService:TraningServiceService) { }

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
  requestTraining(mentorId:number) {
    this.userService.getCurrentUserFromDataBase();
    this.requestTrainingMentorId = mentorId;
    this.requestTrainingForm = this.formBuilder.group({
      startDate: ['',[
        Validators.required,
        this.dateToday.bind(this),
        this.startAfterEnd.bind(this)
      ]],
      endDate: ['',[
        Validators.required,
        this.dateToday.bind(this),
        this.endBeforeStart.bind(this)
      ]]
    })
  }

  get startDate(){
    return this.requestTrainingForm.get('startDate');
  }

  get endDate(){
    return this.requestTrainingForm.get('endDate');
  }

  dateToday(formControl: FormControl): { [s: string]: boolean } {
    if (this.requestTrainingForm) {
      if (formControl.value){
        let date:Date = new Date(formControl.value);
        let currentDate = new Date();        
        if ( date < currentDate ) {
          return { 'nomatch': true };
        }
      }
    }
    return null;
  }
  
  endBeforeStart(formControl:FormControl): { [s: string]: boolean } {
    if (this.requestTrainingForm) {
      if (formControl.value){
        let endDate:Date = new Date(formControl.value);
        let startdate = new Date(this.requestTrainingForm.get('startDate').value);            
        if ( startdate > endDate ) {
          return { 'nomatch1': true };
        }
      }
    }
    return null;
  }
  
  startAfterEnd(formControl:FormControl): { [s: string]: boolean } {
    if (this.requestTrainingForm) {
      if (formControl.value){
        let startdate:Date = new Date(formControl.value);
        let endDate = new Date(this.requestTrainingForm.get('endDate').value);            
        if ( startdate > endDate ) {
          return { 'nomatch1': true };
        }
      }
    }
    return null;
  }
  
  submitRequestTraining(formData:any,mentorSkill:mentorskill) {
    console.log(mentorSkill.skill)
    let trainingDetails:training = {id:null,mentor:mentorSkill.mentor,endDate:formData["endDate"],progress:0,rating:null,
    skill:mentorSkill.skill,startDate:formData["startDate"],status:"Request Pending",user:this.userService.getCurrentUser()}
    this.trainingService.sendTrainingRequest(trainingDetails).subscribe(
      (data)=>{
        window.alert("Your details are submitted successfully");
      },
      (error)=>{
        console.log(error);
        if (error.error.message == "Start Date Collides with an existing approved training of Mentor") {
          this.errorMessage = "Start Date Collides with an existing approved training of Mentor";
        }
        else if (error.error.message == "End Date Collides with an existing approved training of Mentor") {
          this.errorMessage = "End Date Collides with an existing approved training of Mentor";
        }
        else if (error.error.message == "Start Date Collides with an existing approved training of User") {
          this.errorMessage = "Start Date Collides with an existing approved training of User";
        }
        else if (error.error.message == "End Date Collides with an existing approved training of User") {
          this.errorMessage = "End Date Collides with an existing approved training of User";
        }
      }
    )
  }
}
