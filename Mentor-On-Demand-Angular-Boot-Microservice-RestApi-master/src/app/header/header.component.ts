import {Component, EventEmitter, Injectable, OnChanges, OnInit, Output} from '@angular/core';
import {MentorService} from "../serviceModule/MentorModule/mentor.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnChanges {
  isUserLoggedIn:string = "false";
  isMentorLoggedIn:string = "false";


  constructor() {

  }

  @Output() OnSelectingMenuOption = new EventEmitter<string>();
  ngOnInit() {
    if(localStorage.getItem('isUserLoggedIn')===null)
    {
      this.isUserLoggedIn='false';
    }else{
      this.isUserLoggedIn=localStorage.getItem('isUserLoggedIn');
    }
    if(localStorage.getItem('isMentorLoggedIn')===null){
      this.isMentorLoggedIn='true';
    }else{
      this.isMentorLoggedIn=localStorage.getItem('isMentorLoggedIn');
    }
    console.log("again running");
    console.log(this.isUserLoggedIn+this.isMentorLoggedIn);
  }

  ngOnChanges(){
    this.isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
    this.isMentorLoggedIn = localStorage.getItem('isMentorLoggedIn');
    console.log("changes inside running");
    console.log(this.isUserLoggedIn+this.isMentorLoggedIn);
  }

  selectedMenuOption(option:string) {
      this.OnSelectingMenuOption.emit(option);
  }

  getUserLogOut() {
    localStorage.removeItem('isUserLoggedIn');
    localStorage.setItem('isUserLoggedIn','false');
  }

  getMentorLogOut(){
    localStorage.removeItem('isMentorLoggedIn');
    localStorage.setItem('isMentorLoggedIn','false');
  }
}
