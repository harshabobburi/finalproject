import { Component, OnInit } from '@angular/core';
import { cart } from '../cart';
import { CartService } from '../cart.service';
import { FoodService } from 'src/app/food/food.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cart:cart;

  constructor(private cartService:CartService,private _foodservice:FoodService) {


   }

  ngOnInit() {

  

    // this.cartService.calculateTotal();
    this.cartService.getAllcart();
  }

  removeFromCart(cartId){
    this._foodservice.deleteCartItem(cartId).subscribe(data=>{
            this.cartService.getAllcart();
         })
}
}
