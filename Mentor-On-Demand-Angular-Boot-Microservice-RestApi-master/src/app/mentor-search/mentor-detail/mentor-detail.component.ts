import {Component, Input, OnInit} from '@angular/core';
import {MentorModel} from "../../serviceModule/MentorModule/Mentor.Model";
import {isBoolean} from "util";
import {UserMentorServiceService} from "../../serviceModule/UserMentorModule/user-mentor-service.service";
import {UserMentorModel} from "../../serviceModule/UserMentorModule/UserMentor.Model";
import {UserModel} from "../../serviceModule/UserModule/user.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-mentor-detail',
  templateUrl: './mentor-detail.component.html',
  styleUrls: ['./mentor-detail.component.css']
})
export class MentorDetailComponent implements OnInit {
@Input() mentorData:MentorModel;

constructor(private userMentorService: UserMentorServiceService,
            private http:HttpClient) { }

  isUserLoggedIn:string;
  UserLoggedIn:UserModel;
  ngOnInit() {
    this.UserLoggedIn = JSON.parse(localStorage.getItem('UserLoggedIn'));
    this.isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
    console.log("Check"+this.isUserLoggedIn)
  }

  proposeMentor(mentorId: number) {
    console.log("deep kumar"+this.UserLoggedIn.userId);
      let userMentorData = new UserMentorModel(this.UserLoggedIn.userId,mentorId,12,true,
        false,false,4.6,0.0,'Not Sure');
      this.userMentorService.getProposalByStudentSent(userMentorData)
        .subscribe((data)=>{
          console.log("Successfully connected");
          console.log(data)
;        },(err)=>{
          console.log("Connection Not sent");
        });


  }
}
