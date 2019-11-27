import { Component, OnInit, Input } from '@angular/core';
import { FoodService } from '../food.service';
import { fooditem } from 'src/app/fooditem';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.css']
})
export class FoodSearchComponent implements OnInit {

  constructor(private menuservice:FoodService) { }
  @Input() filterlist:fooditem[];
  fooditem:fooditem[];
  ngOnInit() {
    this.menuservice.getAllMenuItems().subscribe(data=>this.fooditem=data)
  }
  search(event:any)
  {

    //this.menuservice.getItem(event.target.value).subscribe(filterlist => this.filterlist=filterlist)
    this.menuservice.getSubject().next(event.target.value);

  }

}
