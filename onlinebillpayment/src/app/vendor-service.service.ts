import { Injectable } from '@angular/core';
import { vendor } from './vendorsignup/vendor';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  vendoruserExists:boolean=true;
  
  constructor(private router:Router,private httpclient:HttpClient) { }
  addvendorUser(vendor:any)
  {
    let NewvendorUsers:vendor={vendor_name:vendor["vendor_name"],registration_no:vendor["registration_no"],vendor_type:vendor["vendor_type"],address:vendor["address"],country:vendor["country"],state:vendor["state"],vendor_email:vendor["vendor_email"],contact_number:vendor["contact_number"],password:vendor["password"],website:vendor["website"],certificate_issue_date:vendor["certificate_issue_date"],cert_validity_date:vendor["cert_validity_date"],year_establishment:vendor["year_establishment"],payment_gateway:vendor["payment_gateway"],username:vendor["username"]}
    this.addvendorUsers(NewvendorUsers).subscribe(data=>{
      this.vendoruserExists=data;
      if(data)
      {
        
        this.router.navigate(['vendorlogin'])
      }
    },
    (error)=>{
      this.vendoruserExists=true;
      console.log(error)
    }
    )
  }
 

  
  addvendorUsers(vendor:vendor):Observable<any>
  {
    console.log(vendor)
    return this.httpclient.post<vendor>(environment.baseUrl+'vendors',vendor)
  }
}
