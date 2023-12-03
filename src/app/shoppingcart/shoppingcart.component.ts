import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductOrders } from '../models/product-orders';
import { CustomerService } from '../services/customer.service';
import {Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ProductOrder } from '../models/product-order';
@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {


  orderFinished: boolean=false;
    orders: ProductOrders=new ProductOrders();
  @Input()  orders2: ProductOrders=new ProductOrders();
  @Input()  orders1?:ProductOrder[] ;
  
  total: number=0;
  sub?: Subscription;

  @Output() onOrderFinished: EventEmitter<boolean>=new EventEmitter<boolean>();

  constructor(private customerService :CustomerService,private route:ActivatedRoute) {

    this.total = 0;
    this.orderFinished = false;
    this.onOrderFinished = new EventEmitter<boolean>();

   }
   ngOnDestroy() {
    this.sub?.unsubscribe();
}

  ngOnInit(): void {
  }

  private calculateTotal(products: ProductOrder[]): number {
    let sum = 0;
    products.forEach(value => {
        sum += (value.product.price * (value.quantity+1));
    });
    alert(sum);
    return sum;
}


finishOrder() {
  this.orderFinished = true;
  this.customerService.Total = this.total;
  this.onOrderFinished.emit(this.orderFinished);
}

loadTotal() {
  this.sub = this.customerService.OrdersChanged.subscribe(() => {
      this.total = this.calculateTotal(this.orders.productOrders);
  });
}

loadCart() {
  alert("load");
  this.sub = this.customerService.ProductOrderChanged.subscribe(() => {
      let productOrder = this.customerService.SelectedProductOrder;
      if (productOrder) {
          this.orders.productOrders.push(new ProductOrder(
              productOrder.product, productOrder.quantity));
      }
      this.customerService.ProductOrders = this.orders;
      this.orders = this.customerService.ProductOrders;
      this.total = this.calculateTotal(this.orders.productOrders);
  });
}

reset() {
  this.orderFinished = false;
  this.orders = new ProductOrders();
  this.orders.productOrders = []
  this.loadTotal();
  this.total = 0;
}

}
