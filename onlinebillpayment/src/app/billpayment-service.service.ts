import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { bill } from './bill';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthServiceService } from './service/auth-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BillpaymentServiceService {

  private billsubject = new Subject<bill[]>();
  url:string = environment.baseUrl;
  constructor(private router:Router,private http:HttpClient,private authservice:AuthServiceService) { }

  getbillpayment(id:string):Observable<any>
  {
    const headers = new HttpHeaders({Authorization: 'Bearer ' +this.authservice.accessToken});
      return this.http.get<bill[]>(`${environment.baseUrl}`+`onlinebillpayment-service/billpayments`+"/"+id,{headers});
  }

  getbillpayments():Observable<any>
  {
    // let headers = new HttpHeaders();
    // console.log(this.authservice.getToken() + ` token`);
    // headers = headers.set(`Authorization`, `Bearer `+this.authservice.getToken());
    // return this.http.get<bill>(this.url+"billpayments", {headers})
    const headers = new HttpHeaders({Authorization: 'Bearer ' +this.authservice.accessToken});
      return this.http.get<bill>(`${environment.baseUrl}`+`onlinebillpayment-service/billpayments`+"/",{headers});
  }

  getSubject(): Subject<bill[]>
  {
    return this.billsubject;
  }
}
