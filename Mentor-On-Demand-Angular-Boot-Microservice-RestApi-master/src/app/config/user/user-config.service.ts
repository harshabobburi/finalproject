import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {
  private user_api_url = "http://localhost:8000/users";

  // URL for adding a user
  getUserRegistrationURL():string{
    return (this.user_api_url+"/addUser");
  }

  //URL for logging a user
  getUserLoginURL():string{
    return (this.user_api_url+"/login");
  }
  constructor() { }
}
