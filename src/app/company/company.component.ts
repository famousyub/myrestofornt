import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companies : Company[] = [];

  displayedColumns: string[] = ['id', 'name', 'logo', 'resto','tableresto'];
  constructor(private customerserv :CustomerService ) { }

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
