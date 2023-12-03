import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Restaurant } from '../models/restaurant';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {


  restaurant  : any ;
  restId :number = 1;
  compid:number=1;
  msresto1 :Restaurant =new Restaurant();
  msresto :any;

  mestables =   [{
    idtables: 1 ,
    menuId:1

  },
  {
    idtables: 2,
    menuId:1

  }
  ,
  {
    idtables: 3 ,
    menuId:1

  },
  {
  idtables: 4 ,
  menuId:1

},
{
  idtables: 5 ,
  menuId:1

}
,
{
  idtables: 6 ,
  menuId:1

},
{
  idtables: 7 ,
  menuId:1

},
{
  idtables: 8 ,
  menuId:1

}
,
{
  idtables: 9 ,
  menuId:1

},
{
  idtables: 10 ,
  menuId:1

},
{
  idtables: 11 ,
  menuId:1

}
,
{
  idtables: 12 ,
  menuId:1

}
  ];
  displayedColumns: string[] = ['idtables', 'menuId','menutable','yummymenu','menushopp','qrmenu'];
  private myAngularxQrCode: string = "ok";
  constructor(private customerService :CustomerService,private route:ActivatedRoute) { }
//getRecipesbYresto
  ngOnInit(): void {

    this.route.params
            .subscribe(
                (params: Params) => {
                    this.restId = +params['restoid'];
                    this.compid =+params["compId"];

                    alert(this.restId);


                    this.getrestoById(+params['restoid'],params['compId']);
                    this.getTables(params['compId'],+params['restoid'],1);

                }
            );
  }


  getAllRestorecipes(id:number){

      this.customerService.getAllRestoForcompanies(id).subscribe(res=>{
         this.restaurant = res;
      })
  }
  getrestoById(idtresto:number,companyId:number ){

    this.customerService.getRecipesbYresto(idtresto,companyId).subscribe(res=>{
       console.table(res);
       this.restaurant = res;

       //this.mestables.push()

    })
}

getTables(id:number,resid:number,tblId:number) {
     this.customerService.getAllRestoTable(id,resid,tblId).subscribe(res=>{
           console.table(res);
           alert(res);
           this.msresto=res;

     })
}
}










/*

         <table>


            <caption>tables</caption>
            <thead>
                <th>
                    table id
                </th>
                <th>
                    tabme menu
                </th>
            </thead>
        
            <tbody>
                <tr *ngFor="let t  of mestables">
                    <td>{{t.idtables}}</td>
                    <td>
                        {{t.menuId}}
                    </td>
                    <td>

                        <a 
                        [routerLink]="['/restaurants-details-menu', t.idtables, restId,compid]">
                        {{ t.idtables}} view menu table
                      </a>
                        
                    </td>
                </tr>
            </tbody>
        </table>

*/