import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFoodItemInfoComponent } from './food/item-info/item-info.component';
import { MenuComponent } from './food/menu/menu.component';
import { FoodSearchComponent } from './food/food-search/food-search.component';
import { CartComponent } from './shopping/cart/cart.component';
import { FoodItemEditComponentComponent } from './food/item-edit/food-item-edit-component/food-item-edit-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { Routes } from '@angular/router';

import { LoginComponent } from './site/login/login.component';
import { SignupComponent } from './site/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';


// const appRoutes: Routes = [ 
//   { path: 'app-food-item-edit-component/:id', component: FoodItemEditComponentComponent},
//   // { path: 'signup', component: SignupComponent},
//   // { path: 'cart', component: CartComponent, canActivate: [AuthGaurdService]},
//   // { path: 'login',component: LoginComponent},
//   // { path: 'search-bar',component: SearchComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    AppFoodItemInfoComponent,
    MenuComponent,
    FoodSearchComponent,
    CartComponent,
    FoodItemEditComponentComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
