import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Training } from './Training';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from './USER/user.service';
import { Mentor } from './Mentor';
import { Skill } from './Skill';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  zuulURL: string = environment.zuulURL;
  trainingURL: string = this.zuulURL + "training-microservice/";

  constructor(private http: HttpClient, private userService:UserService) { }

  sendTrainingRequest(training: Training): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.userService.getToken());
    return this.http.post(this.trainingURL + "addTrainingRequest/", training, {headers});
  }

  getIncompleteTrainingObservable():Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.userService.getToken());
    return this.http.get(this.trainingURL + "getIncompleteTraining/"+this.userService.getCurrentUserName()+"/", {headers});
  }

  saveStatusChangedTraining(training:Training):Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.userService.getToken());
    return this.http.post(this.trainingURL + "editStatus/", training, {headers});
  }
  
  addMentorSkillAfterLogin(skill:Skill,userName:string,yearsExperience:number,selfRating:number):Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.userService.getToken());
    return this.http.post(this.trainingURL + "addSkillLogin/"+userName+"/"+yearsExperience+"/"+selfRating+"/", skill, {headers});
  }
}
