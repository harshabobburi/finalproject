import { Component, OnInit } from '@angular/core';
import { UserService } from './USER/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Mentor-On-Demand';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/search']);
  }

  logout() {
    this.userService.setToken(null);
    this.userService.setRole(null);
    this.userService.setDisplayName(null);
    this.userService.setCurrentUserName(null);
    this.router.navigate(['/search']);
  }
}
