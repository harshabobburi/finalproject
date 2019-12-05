import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MentorModel} from "../../serviceModule/MentorModule/Mentor.Model";

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements OnInit {
  mentorArray: MentorModel[];

  @Input() mentorData:MentorModel;
  constructor() { }

  ngOnInit() {
    this.mentorArray = JSON.parse(localStorage.getItem('allMentor'));
  }

  @Output() onSelectingMentor = new EventEmitter<MentorModel>();

  mentorElaborate(mentor: MentorModel) {
    this.onSelectingMentor.emit(mentor);
  }
}
