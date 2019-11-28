import { Component, OnInit } from '@angular/core';
import { vendor } from '../vendorsignup/vendor';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { VendorServiceService } from '../vendor-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-vendoredit',
  templateUrl: './vendoredit.component.html',
  styleUrls: ['./vendoredit.component.css']
})
export class VendoreditComponent implements OnInit {

  vendoritem:vendor={id:1,vendor_name:"",registration_no:"14554",vendor_type:"payment",address:"manugur",country:"india",state:"telangana",vendor_email:"harsha@gmail.com",contact_number:"4545",website:"bjbs",certificate_issue_date:new Date('2017-02-02'),cert_validity_date:new Date('2019-03-03'),year_establishment:"2019",payment_gateway:"paytm",username:"harshab",password:"bobburi"}
  ;// {id: null, name: null, price: null, active: null, DateOfLaunch:new Date('2017-02-02'), category: null, freedelivery: null, image: null};
  form:FormGroup;
  category:string;
  saved:boolean=false
  vendoruserExists:boolean=false;
  username1:String;

  //categories=["Main Course","Starters","Dessert","Drink"];

  constructor(private fb: FormBuilder,private vendorservice:VendorServiceService,private route : ActivatedRoute,private router:Router,private http:HttpClient,private authservice:AuthServiceService) {

   }

  ngOnInit() {

    this.category=this.authservice.category;
    this.username1=this.authservice.username;
    //const username=this.route.snapshot.paramMap.get('username');
    //this.fooditem=this.foodservice.getfooditems(+foodItemId);
    this.vendorservice.getvendor(this.username1).subscribe(data=>{
      this.vendoritem=data;
      this.saved=true;
      // this.vendoritem.dateOfLaunch=new Date(this.fooditem.dateOfLaunch);
      // this.fooditem.dateOfLaunch.setDate(this.fooditem.dateOfLaunch.getDate()+1);
     this.vendoritem.certificate_issue_date=new Date(this.vendoritem.certificate_issue_date);
       this.vendoritem.certificate_issue_date.setDate(this.vendoritem.certificate_issue_date.getDate()+1);
       this.vendoritem.cert_validity_date=new Date(this.vendoritem.cert_validity_date);
       this.vendoritem.cert_validity_date.setDate(this.vendoritem.cert_validity_date.getDate()+1);


      this.form=this.fb.group({
        vendor_name:[this.vendoritem.vendor_name,[Validators.required]],
        registration_no:[this.vendoritem.registration_no,[Validators.required]],
        vendor_type:[this.vendoritem.vendor_type,[Validators.required]],
        address:[this.vendoritem.address,[Validators.required]],
        country:[this.vendoritem.country,[Validators.required]],
        state:[this.vendoritem.state,[Validators.required]],
        vendor_email:[this.vendoritem.vendor_email,[Validators.required]],
        contact_number:[this.vendoritem.contact_number,[Validators.required]],
        website:[this.vendoritem.website,[Validators.required]],
        certificate_issue_date:[this.vendoritem.certificate_issue_date.toISOString().substring(0,10),[Validators.required]],
        cert_validity_date:[this.vendoritem.cert_validity_date.toISOString().substring(0,10),[Validators.required]],
        year_establishment:[this.vendoritem.year_establishment,[Validators.required]],
        payment_gateway:[this.vendoritem.payment_gateway,[Validators.required]],
        username:[this.vendoritem.username,[Validators.required]],
        password:['',[Validators.required]],
        confirmPassword:['',[
          Validators.required,
          this.matchConfirmPassword.bind(this)
        ]]

      })
    })
  

  }

  get vendor_name(){
    return this.form.get('vendor_name');
  }

  get registration_no(){
    return this.form.get('registration_no');
  }
  get vendor_type(){
    return this.form.get('vendor_type');
  }
  get address(){
    return this.form.get('address');
  }
  get country(){
    return this.form.get('country');
  }
  get state(){
    return this.form.get('state');
  }
  get vendor_email(){
    return this.form.get('vendor_email');
  }
  get contact_number(){
    return this.form.get('contact_number');
  }
  get website(){
    return this.form.get('website');
  }
  get certificate_issue_date(){
    return this.form.get('certificate_issue_date');
  }
  get cert_validity_date(){
    return this.form.get('cert_validity_date');
  }
  get year_establishment(){
    return this.form.get('year_establishment');
  }
  get payment_gateway(){
    return this.form.get('payment_gateway');
  }
  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }


  onSubmit(){
    let newItem:vendor={id:this.vendoritem.id,vendor_name:this.form.value["vendor_name"],registration_no:this.form.value["registration_no"],certificate_issue_date:new Date(this.form.value["certificate_issue_date"]),
  
   
    vendor_type:this.form.value["vendor_type"],address:this.form.value["address"],country:this.form.value["country"],state:this.form.value["state"],vendor_email:this.form.value["vendor_email"],contact_number:this.form.value["contact_number"],website:this.form.value["website"],cert_validity_date:new Date(this.form.value["cert_validity_date"]),year_establishment:this.form.value["year_establishment"],payment_gateway:this.form.value["payment_gateway"],username:this.form.value["username"],password:this.form.value["password"]};

    this.vendorservice.updatevendors(newItem).subscribe(data=>{
      window.alert("edited")

    })
  }
  
  matchConfirmPassword(formControl: FormControl): { [s: string]: boolean } {
    if (this.form) {
      if (formControl.value && formControl.value.length > 0 && formControl.value !== this.form.get('password').value) {
        return { 'nomatch': true };
      }
    }
    return null;
  }

}
