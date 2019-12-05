import { Component, OnInit } from '@angular/core';
import {UserMentorModel} from "../../serviceModule/UserMentorModule/UserMentor.Model";
import {UserModel} from "../../serviceModule/UserModule/user.model";
import {UserMentorServiceService} from "../../serviceModule/UserMentorModule/user-mentor-service.service";
import {MentorModel} from "../../serviceModule/MentorModule/Mentor.Model";
import {MentorService} from "../../serviceModule/MentorModule/mentor.service";

@Component({
  selector: 'app-mentor-connection',
  templateUrl: './mentor-connection.component.html',
  styleUrls: ['./mentor-connection.component.css']
})
export class MentorConnectionComponent implements OnInit {
  mentorByUserData:UserMentorModel[];
  mentorArray : MentorModel[];
  userLoggedIn:UserModel;
  constructor(private userMentorConnection: UserMentorServiceService,
              private mentorService:MentorService) { }

  ngOnInit() {
    this.getMentorByUser();
  }
  // Getting mentors for users
  getMentorByUser(){
      this.userLoggedIn = JSON.parse(localStorage.getItem('UserLoggedIn'));
      this.userMentorConnection.getMentorByUser(this.userLoggedIn.userId)
        .subscribe((data)=>{
          console.log("getting user by Mentor connections");
          this.mentorByUserData = data;
          this.getMentorByConnectionList();
        },()=>{
          console.log("Cannot get connections for user");
        })
  }

  getMentorByConnectionList(){
     let mentorIdArray: Array<number> = [];
     console.log(this.mentorByUserData);
     for(var i =0;i< this.mentorByUserData.length;i++){
        mentorIdArray.push(this.mentorByUserData[i].mentorId);
     }
     console.log(mentorIdArray);
     this.mentorService.getMentorByUserConnection(mentorIdArray)
       .subscribe((data)=>{
          this.mentorArray = data;
          console.log(this.mentorArray);
          console.log("got mentor list by user connections");
       },(error)=>{
          console.log("cannot get user connection for mentors and mentor list");
       });
  }
}

