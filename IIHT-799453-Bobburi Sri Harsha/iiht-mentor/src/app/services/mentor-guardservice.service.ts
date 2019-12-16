import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MentorGuardserviceService {

  constructor(private authservice:AuthenticationService, private router:Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authservice.role == "Mentor") {
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
}
