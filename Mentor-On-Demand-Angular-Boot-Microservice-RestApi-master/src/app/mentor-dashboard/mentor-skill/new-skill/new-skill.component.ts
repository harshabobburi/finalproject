import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {SkillServiceService} from "../../../serviceModule/SkillModule/skill-service.service";

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
//materialOptions = ['Notes Material','Live video session','Doubt session','Video Study Material'];
  materialOptions = [ {id:'Notes Material',value:'notesMaterial'},
                      {id:'Live video session',value:'liveVideos'},
                      {id:'Doubt session',value:'doubtSession'},
                      {id:'Video Study Material',value:'videoMaterial'}];
  constructor(private skillService:SkillServiceService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.skillService.getSkillAdded(f.value)
      .subscribe((data)=>{
        console.log(data+"Skill added succesfully")
      },(err)=>{
        console.log(err)
      });
  }
}
