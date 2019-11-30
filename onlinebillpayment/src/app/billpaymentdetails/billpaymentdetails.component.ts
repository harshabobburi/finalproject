import { Component, OnInit } from '@angular/core';
import { bill } from '../bill';
import { Router, ActivatedRoute } from '@angular/router';
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
  billitem:bill;

  constructor(private router:Router,private httpclient:HttpClient,private authservice:AuthServiceService,private billservice:BillpaymentServiceService,private route:ActivatedRoute) { }

  ngOnInit() {

    const vendorId =this.route.snapshot.paramMap.get('username');
    console.log("vebdoir iud ="+vendorId)
    this.billservice.getbillpayment(this.authservice.username).subscribe(((data)=>
    {
      this.bills = data;
      console.log(data);
      for(let i=0;i<this.bills.length;i++)
      {

        console.log("inside lioip verify "+this.bills[i].vendor.username)
        if(this.bills[i].vendor.username==vendorId)
        {
        this.billitem=this.bills[i];}
        console.log("Bill ITems are"+this.billitem);
        
      }
      
    }))
  }

}
