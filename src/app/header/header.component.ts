import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ads :any ;

  constructor(private  customerservice:CustomerService) { }

  ngOnInit(): void {
    this.getAll1Ads();
  }


  getAll1Ads(){
    this.customerservice.getAdsall().subscribe(res=>{

      console.table(res);
      this.ads = res;
         
    })
     
  }

}
