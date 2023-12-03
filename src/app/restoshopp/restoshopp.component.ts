import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-restoshopp',
  templateUrl: './restoshopp.component.html',
  styleUrls: ['./restoshopp.component.scss']
})
export class RestoshoppComponent implements OnInit {

  restaurants:any;
  id:number=1;

  constructor(private customerService :CustomerService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];

                    alert(this.id);


                    this.getAllRestorecipes(+params['id']);

                }
            );
  }







  getAllRestorecipes(id:number){

    this.customerService.getAllFoodsIncompany(id).subscribe(res=>{
      console.table(res);
       this.restaurants = res;
    })

  }

}
