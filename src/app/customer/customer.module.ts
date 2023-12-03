import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { RestaurantcustomerComponent } from './restaurantcustomer/restaurantcustomer.component';


@NgModule({
  declarations: [
    RestaurantcustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
