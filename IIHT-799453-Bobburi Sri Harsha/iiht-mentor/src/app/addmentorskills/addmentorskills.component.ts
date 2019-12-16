import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { skill } from '../services/skill';
import { SkillserviceService } from '../services/skillservice.service';
import { TraningServiceService } from '../services/training-service.service';
import { UsersService } from '../services/users.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-addmentorskills',
  templateUrl: './addmentorskills.component.html',
  styleUrls: ['./addmentorskills.component.css']
})
export class AddmentorskillsComponent implements OnInit {

  skillForm: FormGroup;
  skillList: skill[] = [];
  errorMessage: string = null;

  constructor(private skillServices:SkillserviceService, private formBuild: FormBuilder, private trainingService:TraningServiceService, private userService:UsersService,private authService:AuthenticationService) { }

  ngOnInit() {
    
    this.errorMessage = null;
    this.buildSkillForm()
    this.skillList = [];
    this.skillServices.getallskills().subscribe(
      (data) => {
        this.skillList = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }
  buildSkillForm() {
    this.skillForm = this.formBuild.group({
      skill: ['', [
        Validators.required
      ]],
      selfRating: ['', [
        Validators.required,
        Validators.max(10),
        Validators.min(0)
      ]],
      yearsExperience: ['', [
        Validators.required,
        Validators.min(0),
        // Validators.
      ]],
    })
  }
  get skill() {
    return this.skillForm.get('skill');
  }
  get selfRating() {
    return this.skillForm.get('selfRating');
  }
  get yearsExperience() {
    return this.skillForm.get('yearsExperience');
  }
  addSkill(formData:any) {
    let skill:skill = this.skillList.find(skill => skill.name == formData["skill"]);
    let yearsExperience:number = formData["yearsExperience"];
    let selfRating:number = formData["selfRating"];
    console.log(formData)
    this.trainingService.addMentorSkillAfterLogin(skill,this.authService.username,yearsExperience,selfRating).subscribe(
      (data) => {
        console.log(data)
        window.alert("Your Skill details are submitted successfully");
        this.buildSkillForm();
      },
      (error) => {
        console.log(error);
        if (error.error.message == "This skill exists for this mentor") {
          this.errorMessage = "skill entered is already exists for this mentor";
        }
      }
    );
  }

}
