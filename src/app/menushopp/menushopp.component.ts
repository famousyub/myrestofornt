import { Component, OnInit, ViewChild } from '@angular/core';
//import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Restaurant } from '../models/restaurant';
import { CustomerService } from '../services/customer.service';
import {Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ProductOrder } from '../models/product-order';
import { ProductOrders } from '../models/product-orders';
import { Subscription } from 'rxjs';
import { Recipe } from '../models/recipe';
import { ShoppingcartComponent } from '../shoppingcart/shoppingcart.component';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-menushopp',
  templateUrl: './menushopp.component.html',
  styleUrls: ['./menushopp.component.scss']
})
export class MenushoppComponent implements OnInit {

  public form: FormGroup;

  
  @ViewChild('shoppingCartC')
  shoppingCartC: ShoppingcartComponent ;
  
  restaurant  : Restaurant=new Restaurant() ;
  restodata:any;
  restId :number = 1;
  compid:number=1;
  tableId :number=1;

  ingredientAded :number = 0;

  productOrders: ProductOrder[] = [];

  selectedProductOrder?: ProductOrder;
  private shoppingCartOrders: ProductOrders =new ProductOrders();
  sub?: Subscription;
  productSelected: boolean = false;
 rating3:number = 0;
   collapsed = true;
  orderFinished = false;



  constructor(private customerService :CustomerService,private route:ActivatedRoute,private fb: FormBuilder) { 

     this.rating3 = 0;
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
  

      this.shoppingCartC = new ShoppingcartComponent(customerService,route);
  }

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

    this.productOrders=[];
  }
  removeFromCart(productOrder: ProductOrder) {
    let index = this.getProductIndex(productOrder.product);
    if (index > -1) {
        this.shoppingCartOrders.productOrders.splice(
            this.getProductIndex(productOrder.product), 1);
    }
    this.customerService.ProductOrders = this.shoppingCartOrders;
    this.shoppingCartOrders = this.customerService.ProductOrders;
    this.productSelected = false;
}


  addToCart(order: ProductOrder) {
    alert(order.product.id);
    this.customerService.SelectedProductOrder = order;
    this.selectedProductOrder = this.customerService.SelectedProductOrder;
    this.productSelected = true;

    console.table(order);
}

  getrestoById(idtresto:number,companyId:number ){

    this.customerService.getRecipesbYrestotos(idtresto,companyId).subscribe(res=>{
       console.table(res);
       this.restaurant = res;
       this.restodata=res;

       this.restaurant.recipes?.forEach(rec=>{
       // alert(rec);
        this.productOrders.push(new ProductOrder(rec,0));
       },
       (err:any)=>console.error(err)
       )

    })
}
getProductIndex1(product: Recipe): number {

  let   red :any ;

    // if(this.restaurant !=undefined){
    //   this.restaurant.recipes?.forEach(  erc => {
    //     alert(erc.id);
    //        if(erc==product){
    //            return erc.id
    //        }
    //        else  {
    //            console.table(erc);
    //        }
    // });

    // }

    this.productOrders.forEach(prod =>{
           if(prod.product == product) {
                 red=product.id;
                 return red;
           }
           else   {

            red  = -1;
              
           }
    })

 

return   -1;

 

  
   
}

getProductIndex(product: Recipe): number {
  const me= this.customerService.ProductOrders.productOrders.findIndex(
    
    (value  )  =>console.log(value.product.id));
    // value.product.id === product.id);
    //alert(me);
   // console.log(me);
  return this.customerService.ProductOrders.productOrders.findIndex(
      value => value.product.id === product.id);
}
isProductSelected(product: Recipe): boolean {

 // console.log(this.getProductIndex(product));
  return this.getProductIndex(product) > -1;
}








loadOrders() {
  this.sub = this.customerService.OrdersChanged.subscribe(() => {
      this.shoppingCartOrders = this.customerService.ProductOrders;
  });
}

reset() {
  this.productOrders = [];

  this.orderFinished = false;

  this.shoppingCartC.reset();
  //this.ordersC.paid = false;
  
  this.customerService.ProductOrders.productOrders = [];
  this.loadOrders();
  this.productSelected = false;
}








toggleCollapsed(): void {
  this.collapsed = !this.collapsed;
}

finishOrder(orderFinished: boolean) {
  this.orderFinished = orderFinished;
}


}
