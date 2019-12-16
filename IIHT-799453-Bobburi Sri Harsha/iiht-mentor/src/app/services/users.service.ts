import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { users } from './users';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MentorserviceService } from './mentorservice.service';
import { Mentors } from './mentor';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

 
  private displayName:string = null;
  private currentUserName:string = null;
  private currentUser:users = null;
  // private role: string = null;
  userExists:boolean=false;
  
  constructor(private router:Router,private httpclient:HttpClient,private mentorservice:MentorserviceService,private authService:AuthenticationService) { }
mentor:Mentors = null;
  addUser(user:any) {
    let NewUsers:users={id:user["id"],userName:user["userName"],password:user["password"],firstName:user["firstName"],lastName:user["lastName"],contactNumber:user["contactNumber"],regCode:user["regCode"],role:user["role"],linkedinUrl:user["linkedinUrl"],yearsOfExperience:user["yearsOfExperience"],active:user["active"],confirmedSignUp:user["confirmedSignUp"],resetPassword:user["resetPassword"],resetPasswordDate:user["resetPasswordDate"]}
    

    this.addUsers(NewUsers).subscribe(data=>{
      if(user.role=="User")
      {
      this.userExists=data;
      this.userExists=false
      window.alert("Signin Successfull")
        
        this.router.navigate(['login'])
    }
    else{

      this.mentorservice.mentor={id:null,linkedinUrl:null,yearsOfExperience:null,timeslot:null,user:user};
      this.router.navigate(['mentordetail'])

    }
  },
    (error)=>{
      this.userExists=true;
      console.log(error)
    })
  }
  
  addUsers(user:users):Observable<any>
  {
    console.log(user)
    return this.httpclient.post<users>(environment.baseUrl+'authenticate-service/users',user)
  }
  getCurrentUser():users {
    return this.currentUser;
  }
  setCurrentUser(currentUser:users) {
    this.currentUser = currentUser;
  }
  getCurrentUserName():string {
    return this.currentUserName;
  }
  setCurrentUserName(currentUserName:string) {
    this.currentUserName = currentUserName;
  }
  getDisplayName():string {
    return this.displayName;
  }
  setDisplayName(displayName:string) {
    this.displayName = displayName;
  }

  getUser():Observable<any> {
    return this.httpclient.get(environment.baseUrl+'authenticate-service/users/findUser/'+this.authService.username);
  }
  getCurrentUserFromDataBase() {
    console.log(this.authService.username);
    
    this.getUser().subscribe(
      (data)=>{
        this.currentUser = data;
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
}
