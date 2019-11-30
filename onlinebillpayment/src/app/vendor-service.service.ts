import { Injectable } from '@angular/core';
import { vendor } from './vendorsignup/vendor';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthServiceService } from './service/auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  vendoruserExists:boolean=false;
  private subject = new Subject<vendor[]>();

  vendorlist:vendor[];
  vendorlists:vendor[];
  
  
  constructor(private router:Router,private httpclient:HttpClient,private authservice:AuthServiceService) { }
  addvendorUser(vendor:any)
  {
    let NewvendorUsers:vendor={id:vendor["id"],vendor_name:vendor["vendor_name"],registration_no:vendor["registration_no"],vendor_type:vendor["vendor_type"],address:vendor["address"],country:vendor["country"],state:vendor["state"],vendor_email:vendor["vendor_email"],contact_number:vendor["contact_number"],password:vendor["password"],website:vendor["website"],certificate_issue_date:vendor["certificate_issue_date"],cert_validity_date:vendor["cert_validity_date"],year_establishment:vendor["year_establishment"],payment_gateway:vendor["payment_gateway"],username:vendor["username"]}
    this.addvendorUsers(NewvendorUsers).subscribe(data=>{
      this.vendoruserExists=data;
      this.vendoruserExists=false;
     
        this.router.navigate(['vendorlogin'])
    },
    (error)=>{
      this.vendoruserExists=true;
      console.log(error)
    }
    )
  }
 

  
  addvendorUsers(vendor:vendor):Observable<any>
  {
    //  let headers = new HttpHeaders();
    //  headers = headers.set('Authorization','Bearer ' + this.authservice.getToken())
    console.log(vendor)
    return this.httpclient.post<vendor>(environment.baseUrl+'vendors',vendor)
  }

  getvendor(username:String):Observable<any>
  {
    const headers = new HttpHeaders({Authorization: 'Bearer ' +this.authservice.accessToken});
      return this.httpclient.get<vendor>(`${environment.baseUrl}`+`vendors`+"/"+username,{headers});


  }
  getallvendors():Observable<any>

  {
    const headers = new HttpHeaders({Authorization: 'Bearer ' +this.authservice.accessToken});
    return this.httpclient.get<vendor>(environment.baseUrl+"vendors",{headers})
  }

  updatevendors(vendor:vendor):Observable<any>
  {
    const headers = new HttpHeaders({Authorization: 'Bearer ' +this.authservice.accessToken});
      return this.httpclient.put<vendor>(`${environment.baseUrl}`+'vendors'+"/",vendor,{headers});
  }
  updatevendor(vendor:vendor,username:string)
  {
    const headers = new HttpHeaders({Authorization: 'Bearer ' +this.authservice.accessToken});
      return this.httpclient.put<void>(`${environment.baseUrl}`+'vendors'+"/"+username,vendor,{headers});

  }
  getSubject():Subject<vendor[]>
  {
    return this.subject;
  }

  getsearchvendor(name:string):vendor[]
  {
    this.getallvendors().subscribe(data=>this.vendorlist=data)
    if(name!="")
    {
      this.vendorlists=this.vendorlist.filter(item=>
        {
          return item.vendor_type.toLowerCase().includes(name.toLowerCase());
        })}
        else{
          this.vendorlists=this.vendorlist
        }
        return this.vendorlists
        }
      }