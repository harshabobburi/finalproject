import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {MentorService} from "../serviceModule/MentorModule/mentor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mentor-sign-up',
  templateUrl: './mentor-sign-up.component.html',
  styleUrls: ['./mentor-sign-up.component.css']
})
export class MentorSignUpComponent implements OnInit {
  userEnteredEmail: any;

  constructor(private mentorService: MentorService,
              private Route: Router) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.mentorService.getMentorRegistered(f.value)
      .subscribe(()=>{
        console.log("mentor Registered");
        this.Route.navigate(['mentorLogin'])
      },(error)=>{
        console.log(error);
      })
  }
}
