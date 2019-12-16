import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { training } from './training';
import { skill } from './skill';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TraningServiceService {

  zuulURL:string = environment.baseUrl;

  constructor(private http:HttpClient,private authService:AuthenticationService) { }

  sendTrainingRequest(training:training):Observable<any> {
    return this.http.post(environment.baseUrl+'traning-service/addTrainingRequest',training);
  }
  getIncompleteTrainingObservable():Observable<any> {
    return this.http.get(environment.baseUrl + 'traning-service/addTrainingRequest/getIncompleteTraining/'+this.authService.username);
  }

  saveStatusChangedTraining(training:training):Observable<any> {
   
    return this.http.post(environment.baseUrl + 'traning-service/addTrainingRequest/editStatus', training);
  }
  
  addMentorSkillAfterLogin(skill:skill,userName:string,yearsExperience:number,selfRating:number):Observable<any> {
  
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.accessToken);
    console.log(this.authService.accessToken)
    return this.http.post<any>(environment.baseUrl + 'traning-service/addTrainingRequest/addSkilllogin/'+userName+'/'+yearsExperience+'/'+selfRating, skill, {headers});
  }
}
