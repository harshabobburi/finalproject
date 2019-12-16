import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { USER } from '../USER';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private token: string = null;
  private role: string = null;
  private displayName: string = null;
  private currentUserName: string = null;
  private currentUser: USER = null;
  zuulURL: string = environment.zuulURL;
  loginURL: string = this.zuulURL + "user-login-microservice/";
  signupURL: string = this.zuulURL + "user-signup-microservice/";
  userURL: string = this.zuulURL + "user-microservice/";

  getCurrentUser(): USER {
    return this.currentUser;
  }
  setCurrentUser(currentUser: USER) {
    this.currentUser = currentUser;
  }
  getCurrentUserName(): string {
    return this.currentUserName;
  }
  setCurrentUserName(currentUserName: string) {
    this.currentUserName = currentUserName;
  }
  getDisplayName(): string {
    return this.displayName;
  }
  setDisplayName(displayName: string) {
    this.displayName = displayName;
  }
  getToken(): string {
    return this.token;
  }
  setToken(token: string) {
    this.token = token;
  }
  getRole(): string {
    return this.role;
  }
  setRole(role: string) {
    this.role = role;
  }

  constructor(private http: HttpClient) { }

  register(user: USER): Observable<any> {
    return this.http.post(this.signupURL + "register", user);
  }
  login(userName: string, password: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + btoa(userName + ":" + password));
    return this.http.get(this.loginURL + "authentication", { headers });
  }
  getUser(): Observable<any> {
    return this.http.get(this.userURL + "findUser/" + this.currentUserName);
  }
  getCurrentUserFromDataBase() {
    this.getUser().subscribe(
      (data) => {
        this.currentUser = data;
      },
      (error) => {
        console.log(error);

      }
    )
  }
}
