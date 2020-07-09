import { Component, OnInit, Inject } from '@angular/core';
import { CbsService } from '../cbs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-details',
  templateUrl: './checkout-details.component.html',
  styleUrls: ['./checkout-details.component.css']
})
export class CheckoutDetailsComponent implements OnInit {
 
 public brand=localStorage.getItem("brand");
  orderCheckoutDetails={   
    "orderId":0,
    "brand":"",
    "model":"",
    "price":"",
    "customerName":"",
    "customerContactNum":"",
    "cusotmerEmail":"",
    "customerAddress":" ",
    "city":"",
    "showroom":""   
 }
  orderID=0;
  constructor(@Inject(CbsService) private cbsService: CbsService,@Inject(Router) private router: Router) { }

  ngOnInit() {
    let orderDetails=this.cbsService.orderDetails["spec"];
    let brand=localStorage.getItem("brand");   
    let showroom=localStorage.getItem("showroom");
    this.orderID=this.getRandomOrderNumberBetween();
    this.orderCheckoutDetails={   
      "orderId":this.orderID,
      "brand":brand,
      "model":orderDetails['model'],
      "price":orderDetails['price'],
      "customerName":"",
      "customerContactNum":"",
      "cusotmerEmail":"",
      "customerAddress":" ",
      "city":"",
      "showroom":showroom  
   }
    
  }
  getRandomOrderNumberBetween(){
    return Math.floor(Math.random() * 899999 + 100000);
  }

  confirmOrder(){
    if (window.confirm('Are you sure?')){
      this.cbsService.setCheckoutStage("order-details");
      console.log("orderCheckoutDetails"+JSON.stringify(this.orderCheckoutDetails));
      return this.cbsService.submitOrder(this.orderCheckoutDetails).subscribe((data: {}) => {
        if(data){
          localStorage.setItem("orderId",this.orderID+'');       
          this.router.navigate(['/order-details']);
        }
      })     
    }  
    
  }

}
