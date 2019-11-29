import { Component, OnInit } from '@angular/core';
import { bill } from '../bill';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../service/auth-service.service';
import { BillpaymentServiceService } from '../billpayment-service.service';

@Component({
  selector: 'app-billpaymentdetails',
  templateUrl: './billpaymentdetails.component.html',
  styleUrls: ['./billpaymentdetails.component.css']
})
export class BillpaymentdetailsComponent implements OnInit {

  bills:bill[];

  constructor(private router:Router,private httpclient:HttpClient,private authservice:AuthServiceService,private billservice:BillpaymentServiceService) { }

  ngOnInit() {
    this.billservice.getbillpayment(this.authservice.username).subscribe(((data)=>
    {
      this.bills = data;
      console.log(this.bills);
    }))
  }

}
