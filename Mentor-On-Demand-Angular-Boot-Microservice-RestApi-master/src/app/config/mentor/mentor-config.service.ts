import { Injectable } from '@angular/core';
import {MentorModel} from "../../serviceModule/MentorModule/Mentor.Model";

@Injectable({
  providedIn: 'root'
})
export class MentorConfigService {

  private API_URL = "http://localhost:8001/mentor";

  // Getting all mentors
  getAllMentors_API_URL():String{
    return this.API_URL+"/mentors"
  }
  // Getting mentor Registered
  getMentorRegistered_API_URL():string{
    return this.API_URL+"/addMentor";
  }

  //Getting mentor logged in
  getMentorLogIn_API_URL():string{
    return (this.API_URL+"/login");
  }

  getMentorByUserConnection_URL():string{
    return (this.API_URL+"/mentorConnectionByUser");
  }
  constructor() { }
}
