import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { fooditem } from 'src/app/fooditem';
import { FoodService } from '../food.service';
import { AuthServiceService } from 'src/app/site/auth-service.service';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class AppFoodItemInfoComponent implements OnInit{
  

  @Input() item:fooditem;
  @Output() addToCartclicked:EventEmitter<number> = new  EventEmitter<number>();
  isAdmin:boolean;


  constructor(private _foodservice:FoodService,private authservice:AuthServiceService){}

  ngOnInit(){
    this.isAdmin=this.authservice.isAdmin;
  }


  onAddToCart(itemId:number){

  this.addToCartclicked.emit(itemId);
}

  

}
