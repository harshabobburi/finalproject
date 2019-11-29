import { Component, OnInit } from '@angular/core';
import { vendor } from '../vendorsignup/vendor';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';
import { UserServiceService } from '../service/user-service.service';
import { VendorServiceService } from '../vendor-service.service';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent implements OnInit {

  vendor:vendor[] = [];
  constructor(private router:Router,private authservice:AuthServiceService,private userservice:UserServiceService,private vendorservice:VendorServiceService) { }

  ngOnInit() {

    console.log(this.authservice.username);
    this.vendorservice.getallvendors().subscribe((data:vendor[]) =>
      {
      this.vendor=data;
      console.log(this.vendor)
  })

// this.vendorservice.getSubject().subscribe((data) =>  {this.vendor = data});
}
}