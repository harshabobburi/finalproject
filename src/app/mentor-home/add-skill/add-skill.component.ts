import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/Skill';
import { SkillService } from 'src/app/skill.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TrainingService } from 'src/app/training.service';
import { UserService } from 'src/app/USER/user.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  skillForm: FormGroup;
  skillList: Skill[] = [];
  errorMessage: string = null;

  constructor(private skillService:SkillService, private formBuild: FormBuilder, private trainingService:TrainingService, private userService:UserService) { }

  ngOnInit() {
    
    this.errorMessage = null;
    this.buildSkillForm()
    this.skillList = [];
    this.skillService.getAllSkillsObservable().subscribe(
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
    let skill:Skill = this.skillList.find(skill => skill.name == formData["skill"]);
    let yearsExperience:number = formData["yearsExperience"];
    let selfRating:number = formData["selfRating"];
    this.trainingService.addMentorSkillAfterLogin(skill,this.userService.getCurrentUserName(),yearsExperience,selfRating).subscribe(
      (data) => {
        window.alert("Your details are submitted successfully");
        this.buildSkillForm();
      },
      (error) => {
        console.log(error);
        if (error.error.message == "This skill exists for this mentor") {
          this.errorMessage = "This skill exists for this mentor";
        }
      }
    );
  }

}
