import { Injectable, Output, EventEmitter } from '@angular/core';
import { cart } from './cart';
import { FoodService } from '../food/food.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  @Output() cartUpdated = new EventEmitter();


  cart:cart={menuItemList:[],total:0};
  cartempty:boolean=true;



  constructor(private foodservice:FoodService) { }

  getAllcart(){
    this.foodservice.getAllCartItems().subscribe(data=>{
      this.cart=data;
      if(this.cart.total==0)
      {
        this.cartempty=true;
      }
      else{
        this.cartempty=false;
      }
    })
  }
  // calculateTotal()
  // {
  //   this.cart.total=0;
  //   for(let i=0;i<this.cart.menuItemList.length;i++)
  //   {
  //     this.cart.total += this.cart.menuItemList[i].price;
  //   }
  //   this.cartUpdated.emit;
  // }

  // clearcart()
  // {
  //   this.cart={menuItemList:[],total:0};
  //   this.cartempty=true;
  // }
}
