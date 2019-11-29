import { Component, OnInit } from '@angular/core';
import { vendor } from '../vendorsignup/vendor';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';
import { UserServiceService } from '../service/user-service.service';
import { VendorServiceService } from '../vendor-service.service';

@Component({
  selector: 'app-onlinebills',
  templateUrl: './onlinebills.component.html',
  styleUrls: ['./onlinebills.component.css']
})
export class OnlinebillsComponent implements OnInit {

  vendor:vendor;


  constructor(private router:Router,private route:ActivatedRoute,private authservice:AuthServiceService,private userservice:UserServiceService,private vendorservice:VendorServiceService) { }

  ngOnInit() {
    const vendorId = this.route.snapshot.paramMap.get('username');

    this.vendorservice.getvendor(vendorId).subscribe(((data) => {
      this.vendor = data;
      console.log(this.vendor)
    })
    )
  }

}
