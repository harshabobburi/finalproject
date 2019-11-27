import { Injectable } from '@angular/core';
import { fooditem } from '../fooditem';
import { Observable, of, Subject } from 'rxjs';
import { CartService } from '../shopping/cart.service';
import { Router } from '@angular/router';
import { MenuItemService } from '../services/menu-item.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthServiceService } from '../site/auth-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  
  // public fooditem:fooditem[]=[{id:1,name:"Sandwich",price:99,active:true,DateOfLaunch:new Date('2017-08-15'),category:"Main course",freedelivery:true,image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"},
  // {id:2,name:"Burger",price:129,active:true,DateOfLaunch:new Date('12/23/2017'),category:"Main course",freedelivery:false,image:"https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
  // {id:3,name:"Pizza",price:149,active:true,DateOfLaunch:new Date('08/21/2017'),category:"Main course",freedelivery:false,image:"https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"},
  // {id:4,name:"French Fries",price:57,active:false,DateOfLaunch:new Date('07/02/2017'),category:"Starter",freedelivery:true,image:"https://images.unsplash.com/photo-1526230427044-d092040d48dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
  // {id:5,name:"Chocolate Brownie",price:32,active:true,DateOfLaunch:new Date('11/02/2022'),category:"Dessert",freedelivery:true,image:"https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80"}];

  filterlist:fooditem[];
  fooditem:fooditem[];
  subject = new Subject<string>();
  isAdmin:boolean=false;
  addedToCart:boolean = false;
  cartAddedId:number;
  isLoggedIn:boolean = false;
  clickedOnAdd:boolean = false;

  constructor(private router:Router,private menuserviceitem:MenuItemService,private httpClient: HttpClient,private authservice:AuthServiceService) { 
    this.getAllMenuItems().subscribe(data=>this.fooditem=data)
    if(this.authservice.loggedIn){
      console.log("constructor")
    this.getAllMenuItems().subscribe(data=>this.fooditem=data)}
  }
  getAllMenuItems():Observable<any>{
    // console.log("hola")
    // let username='user'
    // let password='pwd'
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // return this.httpClient.get<fooditem[]>(`${environment.baseUrl}`+'menu-items',{headers})
    if(this.authservice.loggedIn)
    {
      this.isLoggedIn=true;
      const headers = new HttpHeaders({Authorization: 'Bearer ' +this.authservice.accessToken});
      return this.httpClient.get<fooditem[]>(environment.baseUrl+"menuitem-service/menu-items",{headers})
    }
    else
    return this.httpClient.get<fooditem[]>(environment.baseUrl+"menuitem-service/menu-items")
  }

  getMenuItem(id:number):Observable<any>
  {
    const headers = new HttpHeaders({Authorization: 'Bearer ' +this.authservice.accessToken});
      return this.httpClient.get<fooditem[]>(`${environment.baseUrl}`+`menuitem-service/menu-items`+"/"+id,{headers});
  }

  updateMenuItem(fooditem:fooditem,id:number):Observable<any>
  {
    const headers = new HttpHeaders({Authorization: 'Bearer ' +this.authservice.accessToken});
      return this.httpClient.put<void>(`${environment.baseUrl}`+'menuitem-service/menu-items'+"/"+id,fooditem,{headers});
  }
  getItem(name:string):fooditem[]{

    //this.filterlist=this.fooditem.filter(item => {

      //return item.name.toLowerCase().includes(name.toLowerCase());
    //});
    //return of (this.filterlist)
    this.getAllMenuItems().subscribe(data=>this.fooditem=data)
    if(name!=""){
      this.filterlist=this.fooditem.filter(item => {

      return item.name.toLowerCase().includes(name.toLowerCase());
    })}
    else{
      this.filterlist=this.fooditem
    }
    return this.filterlist
    }




  getFoodItem():Observable<fooditem[]> {  

    return of (this.fooditem);

  }
  getFoodItemsCust():Observable<fooditem[]>{
    return of (this.fooditem.filter(fd_it=>fd_it.active && new Date(fd_it.dateOfLaunch)<=new Date()))
  }


  getSubject():Subject<string>
  {
    return this.subject
  }



  addToCart(fooditemId:number)
  {
    if(this.authservice.loggedIn){
    // for(let Item of this.fooditem)
    // {
    //   if(Item.id==fooditemId){
    //     this.cartservice.getAllcart().fooditem.push(Item);
    //     this.cartservice.calculateTotal();
    //     this.addedToCart = true;
    //     this.cartAddedId = fooditemId;

    //   }
    // }

    this.addCartItem(fooditemId).subscribe(data=>{
      this.addedToCart=true;
      this.cartAddedId=fooditemId;
    })
     }
    else{
      this.clickedOnAdd = true;
      this.router.navigate(['login'])
    }

  }
  //  removeFromCart(fooditemId:number)
  //  {
   
  // //   for(let i=0;i<this.cartservice.getAllcart().fooditem.length;i++)
  // //   {
  // //     if(this.cartservice.getAllcart().fooditem[i].id==fooditemId)
  // //     {
  // //       for(let j=i;j<this.cartservice.getAllcart().fooditem.length-1;j++)
  // //       {
  // //         this.cartservice.getAllcart().fooditem[j]=this.cartservice.getAllcart().fooditem[j+1];
  // //       }
  // //       this.cartservice.getAllcart().fooditem.pop();
  // //       this.cartservice.calculateTotal();
  // //     }
  // //   }
  //      this.deleteCartItem(fooditemId).subscribe(data=>{
  //        this.cartservice.getAllcart();
  //      })
  //  }

  addCartItem(menuItemId:number):Observable<any>
  {
    const headers = new HttpHeaders({Authorization: 'Bearer ' +this.authservice.accessToken});
    return this.httpClient.post<fooditem[]>(`${environment.baseUrl}`+'menuitem-service/carts/'+this.authservice.loggedInUser+'/'+menuItemId,null,{headers});
  }
  getAllCartItems():Observable<any>
  {
    const headers = new HttpHeaders({Authorization: 'Bearer ' +this.authservice.accessToken});
    return this.httpClient.get<fooditem[]>(`${environment.baseUrl}`+'menuitem-service/carts/'+this.authservice.loggedInUser,{headers});
  }
  deleteCartItem(menuItemId:Number):Observable<any>
  {
    const headers = new HttpHeaders({Authorization: 'Bearer ' +this.authservice.accessToken});
    return this.httpClient.delete<fooditem[]>(`${environment.baseUrl}`+'menuitem-service/carts/'+this.authservice.loggedInUser+'/'+menuItemId,{headers});
  }
  

  UpdateFoodItem(foodItem:fooditem)
  {
    // console.log("foodItem in foodservice"+foodItem.name)
    for(let i = 0; i<this.fooditem.length;i++){
      if(this.fooditem[i].id == foodItem.id){
        this.fooditem[i] = foodItem;
        // this.cartservice.calculateTotal();
        break;

  }
}
  }
  getfooditems(fooditemId:number){
    for(let item of this.fooditem){
      if(item.id==fooditemId)

      return item;
    }

  }
}






