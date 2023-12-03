import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Company } from '../models/company';
import { Restaurant } from '../modesl/restaurant';
import { ProductOrder } from '../models/product-order';
import { ProductOrders } from '../models/product-orders';
import { Subject } from 'rxjs/internal/Subject';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private productOrder?: ProductOrder ;
    private orders: ProductOrders = new ProductOrders();

    private productOrderSubject = new Subject();
    private ordersSubject = new Subject();
    private totalSubject = new Subject();

    private total: number=0;
    ProductOrderChanged = this.productOrderSubject.asObservable();
    OrdersChanged = this.ordersSubject.asObservable();
    TotalChanged = this.totalSubject.asObservable();

  constructor(private httpclient :HttpClient) { }

  saveOrder(order: ProductOrders) {
    return this.httpclient.post(environment.baseURL+"/psorder", order);
}







     getAdsall(){
      return this.httpclient.get<Company[]>(environment.baseURL+"listads");  
     }

  getAlllcOmpanies(){
     return this.httpclient.get<Company[]>(environment.baseURL+"companies");

  }

  getAllRestoForcompanies(id:number){
    return this.httpclient.get(environment.baseURL +"all/"  +id);
  }


  getRecipesbYresto(restId:number , compId:number)  {
      return this.httpclient.get<Restaurant>(environment.baseURL+"allresto/" +  compId+"/" + restId);
  }

  getRecipesbYrestotos(restId:number , compId:number)  {
    return this.httpclient.get<Restaurant>(environment.baseURL+"allresto/" +  compId+"/" + restId);
}

  getAllArea(){
    return this.httpclient.get(environment.baseURL+"listarea");

  }

  getAllAreaBycompanyId(id:number){
      return  this.httpclient.get(environment.baseURL+"listareasp/" + id);

  }

  getAllRestoTable(id:number, restoId:number , tableId:number){
   //customer/alresto/1/1/1
       return this.httpclient.get<Restaurant>(environment.baseURL +"alresto/"  + id + "/"  +restoId + "/" +tableId );
  }

  //allfoods

  getAllFoodsIncompany(id:number){
      return this.httpclient.get<Restaurant>(environment.baseURL +"allfoods/" + id);
  }

  set SelectedProductOrder(value: ProductOrder) {
    this.productOrder = value;
    this.productOrderSubject.next(value);
}

get SelectedProductOrder() {
  if(this.productOrder)
  {
    return this.productOrder;
  }

  return {
       product:  {
        id:0 ,
        description: '',
        name:'',
        imagePath:'',
        qunatitymax:0,
    
        shown:true,
        price:0.0,
        level:0,
        ingredients:[]
           
       },
       quantity:1
  };
    
}

set ProductOrders(value: ProductOrders) {
    this.orders = value;
    this.ordersSubject.next(value);
}

get ProductOrders() {
    return this.orders;
}

get Total() {
    return this.total;
}

set Total(value: number) {
    this.total = value;
    this.totalSubject.next(value);
}

}
