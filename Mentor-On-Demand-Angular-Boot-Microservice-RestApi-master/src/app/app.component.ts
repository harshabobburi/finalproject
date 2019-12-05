import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mentor-On-Demand';
  isUserLoggedIn:string = "no";
  isMentorLoggedIn:string = "no"

  ngOnChanges(){
    this.isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
    this.isMentorLoggedIn = localStorage.getItem('isMentorLoggedIn');
    console.log("App component ts inside of it")
  }
}
