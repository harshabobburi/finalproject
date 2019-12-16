import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../USER/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorGuardService implements CanActivate  {

  constructor(private userService:UserService, private router:Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userService.getRole() == "ROLE_M") {
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
}
