import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellersComponent } from './sellers/sellers.component';
import { CarsComponent } from './cars/cars.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchCarComponent } from './search-car/search-car.component';
import { CarCatalogComponent } from './car-catalog/car-catalog.component';
import { CheckoutDetailsComponent } from './checkout-details/checkout-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { CbsService } from './cbs.service';
@NgModule({
  declarations: [
    AppComponent,
    SellersComponent,
    CarsComponent,
    LoginComponent,
    SignupComponent,   
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    SearchCarComponent,
    CarCatalogComponent,
    CheckoutDetailsComponent,
    OrderDetailsComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
