import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  companies : any;
  constructor(private customerserv :CustomerService) { }

  ngOnInit(): void {

    this.getAllcompanies();
  }
  getAllcompanies(){
    this.customerserv.getAlllcOmpanies().subscribe(res=>{

        console.log(res);
        this.companies  =res;
    })
}
}
