import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodItemEditComponentComponent } from './food/item-edit/food-item-edit-component/food-item-edit-component.component';
import { CartComponent } from './shopping/cart/cart.component';
import { MenuComponent } from './food/menu/menu.component';
import { LoginComponent } from './site/login/login.component';
import { FoodSearchComponent } from './food/food-search/food-search.component';
import { SignupComponent } from './site/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
    {path:'edit/:id', component: FoodItemEditComponentComponent},
    { path: 'cart', component: CartComponent},
    { path: 'login',component: LoginComponent},
    { path: 'search-bar',component: FoodSearchComponent},
    { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
