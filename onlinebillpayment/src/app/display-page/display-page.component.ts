import { Component, OnInit, Input } from '@angular/core';
import { vendor } from '../vendorsignup/vendor';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';
import { UserServiceService } from '../service/user-service.service';
import { VendorServiceService } from '../vendor-service.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent implements OnInit {

  Vendors:vendor[]=[];
  constructor(private router:Router,private authservice:AuthServiceService,private userservice:UserServiceService,private vendorservice:VendorServiceService) { }


  myrole:string;
  ngOnInit() {

    console.log(this.authservice.username);
    this.vendorservice.getallvendors().subscribe((data:vendor[]) =>
      {
      this.Vendors=data;
      console.log(this.Vendors)
  })

  this.vendorservice.getSubject().subscribe((data) => { this.Vendors = data });
  // this.vendorservice.getSubject().subscribe(data =>{
  //   console.log("in")
  //   this.vendor=this.vendorservice.getsearchvendor(data)
  // })
  this.myrole=this.authservice.myrole;
  console.log(this.myrole)
  

// this.vendorservice.getSubject().subscribe((data) =>  {this.vendor = data});
}
}