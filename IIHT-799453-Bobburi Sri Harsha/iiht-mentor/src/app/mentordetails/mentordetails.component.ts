import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MentorserviceService } from '../services/mentorservice.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-mentordetails',
  templateUrl: './mentordetails.component.html',
  styleUrls: ['./mentordetails.component.css']
})
export class MentordetailsComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private mentorService:MentorserviceService,private userService:UsersService) { }
  signupform:FormGroup;


  ngOnInit() {this.signupform=this.fb.group({
    linkedinUrl:["",[Validators.required]],
    yearsOfExperience:["",[Validators.required]],
    timeslot:["",[Validators.required]]
    
  });
}
get linkedinUrl() {
  return this.signupform.get('linkedinUrl');
}
get yearsOfExperience() {
  return this.signupform.get('yearsOfExperience');
}
get timeslot() {
  return this.signupform.get('timeslot');
}

addmentor(mentorform:any){

  this.userService.mentor = {

    id:null,
  
  linkedinUrl: this.signupform.value["linkedinUrl"],
  timeslot:this.signupform.value["timeslot"],
  yearsOfExperience:this.signupform.value["yearsOfExperience"],
  user:this.mentorService.mentor.user,
};

  this.mentorService.mentor.linkedinUrl=mentorform['linkedinUrl'];
  this.mentorService.mentor.timeslot=mentorform['timeslot'];
  this.mentorService.mentor.yearsOfExperience=mentorform['yearsOfExperience'];

  this.mentorService.addmentor(this.mentorService.mentor).subscribe(data=>{
    console.log(this.mentorService.mentor);
    alert("Click okay to add Skills");
    this.router.navigate(['addskill'])
  })

}


}
