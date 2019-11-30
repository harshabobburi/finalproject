import { Component, OnInit, Input } from '@angular/core';
import { vendor } from '../vendorsignup/vendor';
import { VendorServiceService } from '../vendor-service.service';


@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  constructor(private vendorservice:VendorServiceService) { }

  Vendors:vendor[]
  searchKey:string;
  Filteredvendors: vendor[];

  ngOnInit() {
    this.vendorservice.getallvendors().subscribe((data:vendor[])=>
      {
             this.Vendors=data;
             console.log(this.Vendors);
      })
  }

  onSearch()
  {

    this.Filteredvendors = this.Vendors.filter(vendor1 => vendor1.vendor_type.toLocaleLowerCase().includes(this.searchKey.toLocaleLowerCase()));
    this.vendorservice.getSubject().next(this.Filteredvendors);
    //this.vendorservice.getsearchvendor(event.target.value).subscribe(filterlist =>{ this.vendors=filterlist })
     //this.vendorservice.getSubject().next(event.target.value);

  }
}
