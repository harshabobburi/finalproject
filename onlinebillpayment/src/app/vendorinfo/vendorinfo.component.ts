import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorServiceService } from '../vendor-service.service';
import { BillpaymentServiceService } from '../billpayment-service.service';
import { bill } from '../bill';

@Component({
  selector: 'app-vendorinfo',
  templateUrl: './vendorinfo.component.html',
  styleUrls: ['./vendorinfo.component.css']
})
export class VendorinfoComponent implements OnInit {

  bills:bill[];
  items:bill;
  paidSuccess:boolean=false;

  constructor(private authservice:AuthServiceService,private route:ActivatedRoute,private vendorservice:BillpaymentServiceService,private router:Router) { }

  ngOnInit() {

    const vendorId =this.route.snapshot.paramMap.get('username');
    console.log("vebdoir iud ="+vendorId)
    this.vendorservice.getbillpayment(this.authservice.username).subscribe(((data)=>
    {
      this.bills = data;
      console.log(data);
      for(let i=0;i<this.bills.length;i++)
      {

        console.log("inside lioip verify "+this.bills[i].vendor.username)
        if(this.bills[i].vendor.username==vendorId)
        {
        this.items=this.bills[i];}
        console.log("Bill ITems are"+this.items);
        
      }
      
    }))
  }
  paid()
  {
    this.router.navigate(['app-successpage'])
    // this.paidSuccess=true
  }

  }


