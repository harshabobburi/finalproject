import {Component, Input, OnInit} from '@angular/core';
import {SkillModel} from "../../../serviceModule/SkillModule/Skill.Model";

@Component({
  selector: 'app-existing-skill',
  templateUrl: './existing-skill.component.html',
  styleUrls: ['./existing-skill.component.css']
})
export class ExistingSkillComponent implements OnInit {
  @Input() mentorSkillData:SkillModel;
  constructor() { }

  ngOnInit() {
  }

}
