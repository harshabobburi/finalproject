import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedInUser={loggedOut:true};
  validCredentials:boolean = true;
  accessToken: string; // JWT token
  redirectUrl = '/';
  loggedIn:boolean = false;
  name:string;
  baseUrl = environment.baseUrl;
  private token: string;
  error: string = "Login Failed";
 role:string;
  isAdmin:boolean = false;
  clickedOnAdd:boolean=false;
  addedToCart:boolean=false;
  username:string;
  isuser:boolean = false;
  ismentor:boolean=false;
myrole:string;

  category:string
  
  

  authenticateSpring(user:string,password:string):Observable<any> {
    let credentials = btoa(user+':'+password);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic '+credentials)
    return this.http.get(this.baseUrl+"authenticate-service/authentication", {headers})
  }
  public setToken(token: string) {
    this.token = token;
  }
  public getToken() {
    return this.token;
  }


  constructor(public router: Router,private http:HttpClient) { }

  authenticateUser(user) {
    this.authenticateSpring(user.username,user.password).subscribe(
      (data)=>{
        console.log(data)
        this.role=data.role;
        console.log(this.role)
        this.category=data.role
        this.loggedInUser = user.username;
        this.validCredentials = true;
        this.username = user.username;
        this.myrole=data.role;
        // if(data.role == 'ADMIN')
        //   this.isAdmin = true;
        this.loggedIn = true;
        this.accessToken=data.token;
        console.log(this.accessToken)
       if(data.role == 'Mentor')
       {
        this.loggedIn = true;
        this.accessToken=data.token;
        this.router.navigate(['mentorpage']);
       }
       else{
        this.router.navigate(['mainpage']);

       }
      
      },
      (error)=>{
        this.validCredentials = false;
        console.log(error);
        console.log("ERROR");

      }
      )

    }
  logout() {
    this.loggedInUser = {loggedOut:true};
    this.isAdmin=false;
    this.loggedIn = false;
    this.router.navigate(['login']);
  }
}
