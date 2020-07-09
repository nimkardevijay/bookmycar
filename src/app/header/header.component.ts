import { Component, OnInit, Input, Output, Inject } from '@angular/core';
import { CbsService } from '../cbs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(@Inject(CbsService) private cbsService: CbsService,@Inject(Router) private router: Router) {}
  page='';
  ngOnInit() {    
    this.page =  this.cbsService.getCheckOutStage();
    console.log("page :"+this.page);
  }

}
