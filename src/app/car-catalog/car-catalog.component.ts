import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { CbsService } from '../cbs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-catalog',
  templateUrl: './car-catalog.component.html',
  styleUrls: ['./car-catalog.component.css']
})
export class CarCatalogComponent implements OnInit {
  // @Input()page:string;
  // @Output() pageValue=new EventEmitter();
  searchedCarModels =[];
  brandName='';
  city='';
  showroom='';
  colors=[];
  models=[];
  filterColors=[];
  filterModels=[];
  pricemin="0";
  pricemax="99999999999";

  constructor(@Inject(CbsService) private cbsService: CbsService,@Inject(Router) private router: Router) { }
 
  ngOnInit() {
   // this.page=this.cbsService.getCheckOutStage();
   // this.pageValue.emit(this.page);  
   this.brandName=localStorage.getItem('brand');   
   this.city=localStorage.getItem('city');
   this.showroom=localStorage.getItem('showroom');   
   console.log("all specs : "+JSON.stringify(this.cbsService.searchModels['specs']));    
   this.searchedCarModels=this.cbsService.searchModels['specs'];
   //reinitialized
   this.colors=[];
   this.models=[];
    for(let carModel of this.searchedCarModels){
      if(!(this.models.indexOf(carModel.spec.model)>-1)){
        this.models.push(carModel.spec.model);
      }
      if(!(this.colors.indexOf(carModel.spec.color)>-1)){
        this.colors.push(carModel.spec.color);
      }     
      carModel.spec["imageUrl"]="assets/"+this.brandName+"/"+carModel.spec.model+"/"+ carModel.spec.color+".jpg"
    }
  }
  
  placeOrder(specObj){
    this.cbsService.setCheckoutStage("checkout");  
    console.log("Ordered : "+ JSON.stringify(specObj));    
      this.cbsService.orderDetails=specObj;   
      this.router.navigate(['/checkout']);    
  }
    
  addToFilterModel($event,model){
    if ($event.target.checked === true) {
      if(!(this.filterModels.indexOf(model)>-1)){
        this.filterModels.push(model);
      }
    }else{
      this.filterModels.splice(model);
    }
  
  }

  addToFilterColors($event,color){
    if ($event.target.checked === true) {
      if(!(this.filterColors.indexOf(color)>-1)){
        this.filterColors.push(color);
      }
    }else{
      this.filterColors.splice(color);
    }
  } 

  filterSearchedCars(){     
    this.cbsService.setCheckoutStage('catalog');  
    let requestBody={
      "brand":localStorage.getItem("brand"),
      "city":localStorage.getItem("city"),
      "showroom":localStorage.getItem("showroom"),  
      "model"  :this.filterModels,
      "color":this.filterColors,
      "pricemin": parseInt(this.pricemin),
      "pricemax":parseInt(this.pricemax)
    };

    return this.cbsService.filterSearchedCars(requestBody).subscribe((data: {}) => {
      if(data){
        this.searchedCarModels=data['specs'];
        for(let carModel of this.searchedCarModels){           
          carModel.spec["imageUrl"]="assets/"+this.brandName+"/"+carModel.spec.model+"/"+ carModel.spec.color+".jpg"
        }
        this.cbsService.searchModels['specs']=  this.searchedCarModels;
        console.log("filtered data "+JSON.stringify(data));
        this.router.navigate(['/catalog']);
      }
    })

  }

}
