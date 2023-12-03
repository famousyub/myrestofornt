import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  restaurants:any;
  id:number=1;
  constructor(private customerService :CustomerService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    // this.route.queryParams.subscribe(params => {

       
    //   alert(params["id"]);
    //   console.log(params['id']);
    //   this.id = params['id'];
    // //  alert(params.get("id"));
    // });

    // alert(this.id);

    // this.getAllRestorecipes();

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

    this.customerService.getAllRestoForcompanies(id).subscribe(res=>{
      console.table(res);
       this.restaurants = res;
    })
}



}
