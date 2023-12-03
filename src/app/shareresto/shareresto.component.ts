import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-shareresto',
  templateUrl: './shareresto.component.html',
  styleUrls: ['./shareresto.component.scss']
})
export class SharerestoComponent implements OnInit {
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

    this.customerService.getAllRestoForcompanies(id).subscribe(res=>{
      console.table(res);
       this.restaurants = res;
    })
}

}
