import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MentorModel} from "../../../serviceModule/MentorModule/Mentor.Model";

@Component({
  selector: 'app-mentor-item',
  templateUrl: './mentor-item.component.html',
  styleUrls: ['./mentor-item.component.css']
})
export class MentorItemComponent implements OnInit {
@Input() mentorData:MentorModel;
@Output() selectMentorEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  mentorElaborate() {
    this.selectMentorEvent.emit();
  }
}
