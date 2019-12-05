import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {MentorConfigService} from "../config/mentor/mentor-config.service";
import {HttpClient} from "@angular/common/http";
import {MentorModel} from "../serviceModule/MentorModule/Mentor.Model";
import {MentorService} from "../serviceModule/MentorModule/mentor.service";
import {Router} from "@angular/router";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-mentor-login',
  templateUrl: './mentor-login.component.html',
  styleUrls: ['./mentor-login.component.css']
})
export class MentorLoginComponent implements OnInit {

  constructor(private mentorConfig:MentorConfigService,
              private mentorService:MentorService,
              private router:Router) { }

  ngOnInit() {
  }

  onSubmit(mentorLoginForm: NgForm) {
      this.mentorService.getMentorLogin(mentorLoginForm.value)
        .subscribe((data)=>{
            localStorage.setItem('isMentorLoggedIn','true');
            console.log("Mentor logged in");
            localStorage.setItem('MentorLoggedIn',JSON.stringify(data));
            this.router.navigate(['mentorpage']);

        },()=>{
            console.log("No mentor found");
        })
  }
}
