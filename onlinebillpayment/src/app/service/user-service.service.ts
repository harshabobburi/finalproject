import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { user } from '../signup/user';
import { vendor } from '../vendorsignup/vendor';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userExists:boolean=false;
  
  constructor(private router:Router,private httpclient:HttpClient) { }

  addUser(user:any) {
    let NewUsers:user={firstname:user["firstname"],lastname:user["lastname"],age:user["age"],gender:user["gender"],contact:user["contact"],pannumber:user["pannumber"],aadharnumber:user["aadharnumber"],userid:user["userid"],password:user["password"]}
    this.addUsers(NewUsers).subscribe(data=>{
      this.userExists=data;
      this.userExists=false
        
        this.router.navigate(['login'])
    },
    (error)=>{
      this.userExists=true;
      console.log(error)
    })
  }
  
  addUsers(user:user):Observable<any>
  {
    console.log(user)
    return this.httpclient.post<user>(environment.baseUrl+'authenticate-service/users',user)
  }
}
