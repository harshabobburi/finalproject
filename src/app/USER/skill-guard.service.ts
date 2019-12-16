import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MentorService } from '../mentor.service';

@Injectable({
  providedIn: 'root'
})
export class SkillGuardService implements CanActivate {

  constructor(private router: Router, private mentorService: MentorService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.mentorService.mentor != null) {
      return true;
    }
    this.router.navigate(["/register"]);
    return false;
  }
}

