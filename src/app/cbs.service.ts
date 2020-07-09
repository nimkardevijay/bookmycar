import { Injectable, Inject, inject } from '@angular/core';
import { map, retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CbsService {
// Define API url
restNodeApiUrl = 'https://node-api-microservices-cc-uc-1-cloudcrash.container-crush-01-4044f3a4e314f4bcb433696c70d13be9-0000.che01.containers.appdomain.cloud';
restBootApiUrl = 'https://springboot-microservices-cc-uc-1-cloudcrash.container-crush-01-4044f3a4e314f4bcb433696c70d13be9-0000.che01.containers.appdomain.cloud';
//shared Object
searchModels={};
orderDetails ={};
submittedOrder={};
// Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 
      'Accept':'application/json'  
    })
  }  

  constructor(@Inject(HttpClient) private http: HttpClient) {    
  }
    
  setCheckoutStage(stage){
    localStorage.setItem('checkout-stage',stage);
  }

  getCheckOutStage(){
    return localStorage.getItem('checkout-stage');
  }
// HttpClient API get() method => Fetch brands 
  getBrands() : Observable<any> {
    //let restNodeApiUrl = 'https://run.mocky.io/v3/078c2c59-90c0-4d25-bff6-46eb97cb8577';
    return this.http.get<any>(this.restNodeApiUrl + '/car/brand',this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getCities(requestBody){
    //let citiUrl = 'https://run.mocky.io/v3/e0fad4ee-043b-4b9e-9c5d-8d363a4b2c7c';
    return this.http.post<any>(this.restNodeApiUrl +'/car/city',requestBody)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getShowrooms(requestBody){
    //let showroomUrl = 'https://run.mocky.io/v3/3a5e215b-8cc0-4913-9e7f-6a3fd2299161';
    return this.http.post<any>(this.restNodeApiUrl  + '/car/showroom',requestBody)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  searchCars(requestBody){
    //let searchUrl = 'https://run.mocky.io/v3/7db7a23a-fea6-40c2-b5e1-58248a4eeae4';
    return this.http.post<any>(this.restNodeApiUrl  + '/car/search',requestBody)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  filterSearchedCars(requestBody){
    //let searchUrl = 'https://run.mocky.io/v3/7db7a23a-fea6-40c2-b5e1-58248a4eeae4';
    return this.http.post<any>(this.restNodeApiUrl  + '/car/filter',requestBody)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  submitOrder(requestBody){
    return this.http.post<any>(this.restBootApiUrl + '/api/createOrder',requestBody)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getOrderDetails(orderId){
   // let restNodeApiUrl = 'https://run.mocky.io/v3/078c2c59-90c0-4d25-bff6-46eb97cb8577';
    return this.http.get<any>(this.restBootApiUrl + '/api/getOrderById/'+orderId,this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
   // Error handling 
   handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
