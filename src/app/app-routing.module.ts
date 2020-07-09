import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SellersComponent } from './sellers/sellers.component';
import { LogoutComponent } from './logout/logout.component';
import { CarCatalogComponent } from './car-catalog/car-catalog.component';
import { SearchCarComponent } from './search-car/search-car.component';
import { CheckoutDetailsComponent } from './checkout-details/checkout-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
 
//  {path:'login',component:LoginComponent},
//  {path:'signup',component:SignupComponent},
//  {path:'logout',component:LogoutComponent},
 {path:'',pathMatch: 'full', redirectTo: 'search'},
 {path:'search',component:SearchCarComponent},
 {path:'catalog',component:CarCatalogComponent},
 {path:'checkout',component:CheckoutDetailsComponent},
 {path:'order-details',component:OrderDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
