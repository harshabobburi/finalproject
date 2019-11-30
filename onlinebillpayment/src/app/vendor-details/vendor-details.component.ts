import { Component, OnInit, Input } from '@angular/core';
import { vendor } from '../vendorsignup/vendor';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {

  @Input() vendors:vendor;

  constructor(private router:Router,private authservice:AuthServiceService) { }

  ngOnInit() {
  }

  displaydetails()
  {
    this.router.navigate(['billpayments'])
    console.log(this.vendors)
  }

}
