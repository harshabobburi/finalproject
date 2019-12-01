import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  // loggedInUser:boolean=false;

  constructor(private router:Router) { }

  ngOnInit() {
    // this.router.navigate(['main']);
  }
  // logout() {
  //   this.loggedInUser = {loggedOut:true};
  //   // this.foodService.isAdmin = false;
  //   this.isAdmin=false;
  //   this.loggedIn = false;
  //   // this.foodService.isLoggedIn = false;
  //   // this.foodService.clickedOnAdd = false;
  //   // this.foodService.addedToCart = false;
  //   // this.cartservice.clearcart();
  //   this.clickedOnAdd=false;
  //   this.addedToCart=false;
  //   this.router.navigate(['login']);
    
  // }

}
