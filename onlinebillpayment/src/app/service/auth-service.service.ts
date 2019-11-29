import { Injectable } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  loggedInUser={loggedOut:true};
  validCredentials:boolean = true;
  accessToken: string; // JWT token
  redirectUrl = '/';
  loggedIn:boolean = false;
  name:string;
  baseUrl = environment.baseUrl;
  private token: string;
  error: string = "Login Failed";
  private role:string;
  isAdmin:boolean = false;
  clickedOnAdd:boolean=false;
  addedToCart:boolean=false;
  username:string;
  isuser:boolean = false;
  isvendor:boolean=false;


  category:string
  
  

  authenticateSpring(user:string,password:string):Observable<any> {
    let credentials = btoa(user+':'+password);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic '+credentials)
    return this.http.get(this.baseUrl+"authenticate", {headers})
  }
  public setToken(token: string) {
    this.token = token;
  }
  public getToken() {
    return this.token;
  }


  constructor(private userService:UserServiceService,public router: Router,private http:HttpClient) { }

  authenticateUser(user) {
    // for(let validUser of this.userService.userList){
    //   if(validUser.username == user.username && validUser.password == user.password){
    //     this.loggedInUser = user;
    //     this.validCredentials = true;
    //     if(user.username == 'admin')
    //       this.foodService.isAdmin = true;
    //     this.router.navigate(['search-bar']);
    //     this.loggedIn = true;
    //     this.foodService.isLoggedIn = true;
    //   }
    //   else
    //     this.validCredentials = false;
    // }
    this.authenticateSpring(user.username,user.password).subscribe(
      (data)=>{
        console.log(data)
        this.role=data.role;
        this.category=data.role
        this.loggedInUser = user.username;
        this.validCredentials = true;
        this.username = user.username;
        if(data.role == 'ADMIN')
          this.isAdmin = true;
          else if(data.role == 'USER')
          this.isuser = true
          else if(data.role == 'VENDOR')
          this.isvendor=true;
        this.loggedIn = true;
        // this.foodService.isLoggedIn = true;
        // this.setToken(data.token);
        this.accessToken=data.token;
        console.log(this.accessToken)
       this.router.navigate(['display']);
      
      },
      (error)=>{
        this.validCredentials = false;
        console.log(error);
        console.log("ERROR");
        // this.error = error.error.message;
        // if (error.error.errors != null) {
        //   this.error = error.error.errors[0];
      
        // }

      }
      )

    }
  logout() {
    this.loggedInUser = {loggedOut:true};
    // this.foodService.isAdmin = false;
    this.isAdmin=false;
    this.loggedIn = false;
    // this.foodService.isLoggedIn = false;
    // this.foodService.clickedOnAdd = false;
    // this.foodService.addedToCart = false;
    // this.cartservice.clearcart();
    this.clickedOnAdd=false;
    this.addedToCart=false;
    this.router.navigate(['login']);
    // this.router.navigate(['search-bar']);
  }
}

