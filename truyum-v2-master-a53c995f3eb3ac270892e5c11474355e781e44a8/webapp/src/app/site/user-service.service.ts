import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { user } from './signup/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  // userList = [
  //   {username:'admin',firstname:"V",lastname:"D",password:"truYum"},
  //   {username:'harsha',firstname:"V",lastname:"D",password:"bobburi"}
  // ];
  userExists:boolean=true;
  
  constructor(private router:Router,private httpclient:HttpClient) { }

  addUser(user:any) {
    let NewUsers:user={firstname:user["firstname"],lastname:user["lastname"],username:user["username"],password:user["password"]}
    this.addUsers(NewUsers).subscribe(data=>{
      this.userExists=data;
      if(data)
      {
        this.router.navigate(['login'])
      }
    },
    (error)=>{
      console.log(error)
    }
    )
  }
 

  
  addUsers(user:user):Observable<any>
  {
    return this.httpclient.post<user>(environment.baseUrl+'authentication-service/users',user)
  }
}
