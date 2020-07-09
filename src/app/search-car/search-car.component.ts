import { Component, OnInit, Input, EventEmitter, Output, NgModule, Inject, forwardRef } from '@angular/core';
import { CbsService } from '../cbs.service';
import { Router } from '@angular/router';
import { NgSelectModule, SelectionModel } from '@ng-select/ng-select';
import {NgControl,FormControl, FormGroup, Validators,FormBuilder, FormControlName,FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import { NgOptionComponent } from '@ng-select/ng-select/ng-select/ng-option.component';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.css']
  // providers: [
  //   { 
  //     provide: NG_VALUE_ACCESSOR,
  //     multi: true,
  //     useExisting: forwardRef(() => SearchCarComponent),
  //   }
  // ]
})
export class SearchCarComponent implements OnInit {
//  public brandItems={}; 
//  public cityItems={};
//  public showroomsItems={};
 public brands:any=[];
 public cities:any=[];
 public showrooms:any=[];

 public selectedBrand='';
 public selectedCity='';
 public selectedShowRoom='';

  constructor(@Inject(CbsService) private cbsService: CbsService,@Inject(Router) private router: Router) { }

  ngOnInit() {
    this.cbsService.setCheckoutStage('search');
    this.getBrands();
  }

  search(){
    localStorage.setItem('brand',this.selectedBrand);
    localStorage.setItem('city',this.selectedCity);
    localStorage.setItem('showroom',this.selectedShowRoom);    
    this.cbsService.setCheckoutStage('catalog');  

    let requestBody={
      "brand":this.selectedBrand,
      "city":this.selectedCity,
      "showroom":this.selectedShowRoom    
    };

    return this.cbsService.searchCars(requestBody).subscribe((data: {}) => {
      if(data){
        this.cbsService.searchModels=data;
        this.router.navigate(['/catalog']);
      }
    })
    

   //window.location.replace('/catalog')
   // window.location.href='/catalog';   
  }

  getBrands(){
    return this.cbsService.getBrands().subscribe((data: {}) => {
      this.brands = data['brands'];
    })
  }

  getCities(){   
    localStorage.setItem('brand',this.selectedBrand);
    let requestBody={"brand":this.selectedBrand};
    console.log("brand: "+this.selectedBrand);
    return this.cbsService.getCities(requestBody).subscribe((data: {}) => {
      this.cities = data['cities'];
    })
  }

  getShowrooms(){  
    localStorage.setItem('city',this.selectedCity); 
    let requestBody={"brand":localStorage.getItem('brand'),"city":localStorage.getItem('city')};
    return this.cbsService.getShowrooms(requestBody).subscribe((data: {}) => {
      this.showrooms = data['showrooms'];
    })
  }
  
}
