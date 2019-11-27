import { Component, OnInit } from '@angular/core';
import { fooditem } from 'src/app/fooditem';
import { FoodService } from '../../food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-food-item-edit-component',
  templateUrl: './food-item-edit-component.component.html',
  styleUrls: ['./food-item-edit-component.component.css']
})
export class FoodItemEditComponentComponent implements OnInit {


   fooditem:fooditem ;// {id: null, name: null, price: null, active: null, DateOfLaunch:new Date('2017-02-02'), category: null, freedelivery: null, image: null};
  form:FormGroup;
  saved:boolean=false

  categories=["Main Course","Starters","Dessert","Drink"];

  constructor(private fb: FormBuilder,private foodservice:FoodService,private route : ActivatedRoute,private router:Router) {

   }

  ngOnInit() {

    const foodItemId=this.route.snapshot.paramMap.get('id');
    //this.fooditem=this.foodservice.getfooditems(+foodItemId);
    this.foodservice.getMenuItem(+foodItemId).subscribe(data=>{
      this.fooditem=data;
      this.saved=true;
      this.fooditem.dateOfLaunch=new Date(this.fooditem.dateOfLaunch);
      this.fooditem.dateOfLaunch.setDate(this.fooditem.dateOfLaunch.getDate()+1);
      this.form=this.fb.group({
        title:[this.fooditem.name,[Validators.required,Validators.maxLength(200)]],
        photoURL:[this.fooditem.image,[Validators.required]],
        price:[this.fooditem.price,[Validators.required]],
        dateOfLaunch:[this.fooditem.dateOfLaunch.toISOString().substring(0,10),[Validators.required]],
        category:[this.fooditem.category,[Validators.required]],
        active:[this.fooditem.active,[Validators.required]],
        freeDelivery:[this.fooditem.freedelivery]
      })
    })
  

  }

  get title(){
    return this.form.get('title');
  }

  get photoURL(){
    return this.form.get('photoURL');
  }
  get price(){
    return this.form.get('price');
  }
  get dateOfLaunch(){
    return this.form.get('dateOfLaunch');
  }
  get category(){
    return this.form.get('category');
  }
  get active(){
    return this.form.get('active');
  }
  get freeDelivery(){
    return this.form.get('freeDelivery');
  }

  onSubmit(){
    let newItem:fooditem={id:this.fooditem.id,name:this.form.value["title"],price:this.form.value["price"],dateOfLaunch:new Date(this.form.value["dateOfLaunch"]),
  
    category:this.form.value["category"],active:this.form.value["active"],freedelivery:this.form.value["freeDelivery"],image:this.form.value["photoURL"]};
    // this.foodservice.UpdateFoodItem(newItem);
  

    console.log(newItem);

    this.foodservice.updateMenuItem(newItem,+this.fooditem.id).subscribe(data=>{
      this.router.navigate([`search-bar`])
    })
  }

  }

