import { Component, OnInit, Inject } from '@angular/core';
import { CbsService } from '../cbs.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  constructor(@Inject(CbsService) private cbsService: CbsService,@Inject(Router) private router: Router) { }
  sumittedOrderDetails={};

  ngOnInit() {   
     let orderId=localStorage.getItem("orderId");
     this.sumittedOrderDetails=this.cbsService.submittedOrder;
     this.getOrderDetails(orderId);
  }

   getOrderDetails(orderId){
    return this.cbsService.getOrderDetails(orderId).subscribe((data: {}) => {
      this.sumittedOrderDetails=data[0];
    });
   }
}
