import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { fooditem } from 'src/app/fooditem';
import { FoodService } from '../food.service';
import { MenuItemService } from 'src/app/services/menu-item.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() fooditem:fooditem[];
  isAdmin:boolean;



  

  constructor(private _foodservice:FoodService,private menuitemservice:MenuItemService) { }
  
  addToCartclicked = new EventEmitter();
  ngOnInit() {
    this._foodservice.getAllMenuItems().subscribe(fooditem => this.fooditem=fooditem)
    // this.isAdmin=this._foodservice.isAdmin;
  //  this.menuitemservice.getAllMenuItems().subscribe(data=>{
      // this.fooditem=data;
    //   if(this.isAdmin)
    //   {
  
    //     this._foodservice.getFoodItem().subscribe(fooditem => this.fooditem=fooditem)
    //     // this.menuitemservice.getAllMenuItems().subscribe(data=>this.fooditem=data);
  
    //     this._foodservice.getSubject().subscribe(data =>{
    //       this.fooditem=this._foodservice.getItem(data)
  
    //     })
  
    //   }
    //   else{
  
           
    //     this._foodservice.getFoodItemsCust().subscribe(fooditem => this.fooditem=fooditem)
  
      this._foodservice.getSubject().subscribe(data =>{
        console.log("in")
        this.fooditem=this._foodservice.getItem(data)
      })
  
  
      
    // }
  
 
    
    // this.menuitemservice.getAllMenuItems().subscribe(data=>this.fooditem=data);
    // this._foodservice.getSubject().subscribe(data =>(
    //      this.fooditem=this._foodservice.getItem(data)));
  }



  // addToCart(itemId:number){

  //   this._foodservice.addToCart(itemId);
  // }


}
