import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MentorModel} from "../serviceModule/MentorModule/Mentor.Model";
import {MentorService} from "../serviceModule/MentorModule/mentor.service";

@Component({
  selector: 'app-mentor-search',
  templateUrl: './mentor-search.component.html',
  styleUrls: ['./mentor-search.component.css']
})

//allMentor - > mentor array
export class MentorSearchComponent implements OnInit {
mentorData:MentorModel;
  constructor(private mentorService:MentorService) { }

  ngOnInit() {
    this.getAllMentors();
  }
  selectedMentorDetail(mentorData: MentorModel) {
    this.mentorData=mentorData;
  }
  getAllMentors(){
    this.mentorService.getAllMentors()
      .subscribe((data)=>{
        console.log("getting all mentors");
        localStorage.setItem('allMentor',JSON.stringify(data));
      },(error)=>{
        console.log(error);
      })
  }
}
