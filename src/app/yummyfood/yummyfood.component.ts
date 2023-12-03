import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-yummyfood',
  templateUrl: './yummyfood.component.html',
  styleUrls: ['./yummyfood.component.scss']
})
export class YummyfoodComponent implements OnInit {
  restaurant  : any ;
  restId :number = 1;
  compid:number=1;
  tableId :number=1;

  constructor(private customerService :CustomerService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params
    .subscribe(
        (params: Params) => {
            this.restId = +params['restoid'];
            this.compid =+params["compId"];
            this.tableId = params["tableId"];

            alert(this.restId);


            this.getrestoById(+params['restoid'],params['compId']);

        }
    );
  }

  getrestoById(idtresto:number,companyId:number ){

    this.customerService.getRecipesbYresto(idtresto,companyId).subscribe(res=>{
       console.table(res);
       this.restaurant = res;

    })
}
}
