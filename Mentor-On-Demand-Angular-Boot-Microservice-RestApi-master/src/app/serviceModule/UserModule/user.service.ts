import {Injectable} from '@angular/core';
import {UserModel} from "./user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {UserConfigService} from "../../config/user/user-config.service";
import {Router, Routes} from "@angular/router";

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor( private  http : HttpClient,
               private userConfig : UserConfigService,
               private router :Router) { }


  private static extractData(res: Response){
    return res || { };
  }

  //Adding a user
  createUser(userData:UserModel):Observable<UserModel>{
    return this.http.post<UserModel>(this.userConfig.getUserRegistrationURL(),userData,httpOptions);
  }

  //Login of user
  loginUser(user:UserModel):Observable<UserModel>{
    console.log("Logging the user")
    const loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = `/email=${user.userEmailId}&password=${user.userPassword}`;
    // @ts-ignore
    return this.http.post<UserModel>(this.userConfig.getUserLoginURL(),user,httpOptions);

  }
}
