import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/skill.service';
import { Skill } from 'src/app/Skill';
import { Mentor_Skill } from 'src/app/Mentor_Skill';
import { MentorService } from 'src/app/mentor.service';

@Component({
  selector: 'app-mentor-details',
  templateUrl: './mentor-details.component.html',
  styleUrls: ['./mentor-details.component.css']
})
export class MentorDetailsComponent implements OnInit {

  registrationForm: FormGroup;
  skillForm: FormGroup;
  userExists: boolean = false;
  skillList: Skill[] = [];
  mentorAdded: boolean = false;
  submittedSkill: boolean = false;
  errorMessage: string = null;

  constructor(private formBuild: FormBuilder, private router: Router, private skillService: SkillService, private mentorService: MentorService) { }

  ngOnInit() {
    this.errorMessage = null;
    this.buildSkillForm()
    this.userExists = false;
    this.skillList = [];
    this.skillService.getAllSkillsObservable().subscribe(
      (data) => {
        this.skillList = data;
      },
      (error) => {
        console.log(error);
      }
    )
    this.registrationForm = this.formBuild.group({
      linkedInURL: ['', [
        Validators.required,
        Validators.maxLength(100),
      ]],
      yearsOfExperience: ['', [
        Validators.required,
        Validators.min(0),
        // Validators.
      ]],
      timeslot: ['', [
        Validators.required
      ]],
    })
  }
  get linkedInURL() {
    return this.registrationForm.get('linkedInURL');
  }
  get yearsOfExperience() {
    return this.registrationForm.get('yearsOfExperience');
  }
  get timeslot() {
    return this.registrationForm.get('timeslot');
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
  addSkill(formDetail: any) {
    this.errorMessage = null;
    let mentorSkill: Mentor_Skill = {
      mentor: this.mentorService.mentor, selfRating: formDetail["selfRating"],
      yearsOfExperience: formDetail["yearsExperience"], skill: this.skillList.find(skill => skill.name == formDetail["skill"])
    };
    this.mentorService.addMentorSkill(mentorSkill).subscribe(
      (data) => {
        window.alert("Your details are submitted successfully");
        this.buildSkillForm();
        this.submittedSkill = true;
      },
      (error) => {
        console.log(error);
        if (error.error.message == "This skill exists for this mentor") {
          this.errorMessage = "This skill exists for this mentor";
        }
      }
    );
  }
  addMentorDetails(formDetails: any) {
    this.errorMessage = null;
    this.mentorService.mentor.linkedinURL = formDetails["linkedInURL"];
    this.mentorService.mentor.timeslot = formDetails["timeslot"];
    this.mentorService.mentor.yearsOfExperience = formDetails["yearsOfExperience"];
    this.mentorService.addMentor(this.mentorService.mentor).subscribe(
      (data) => {
        window.alert("Your details are submitted successfully");
        this.mentorAdded = true;
      },
      (error) => {
        console.log(error);
        if (error.error.message == "This LinkedIn URL is already being used") {
          this.errorMessage = "This LinkedIn URL is already being used";
        }
      }
    )
  }
}
