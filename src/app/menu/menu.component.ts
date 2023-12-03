import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {



  constructor(private customerService :CustomerService,private route:ActivatedRoute) { }
  restaurant  : any ;
  restId :number = 1;
  compid:number=1;
  tableId :number=1;
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
