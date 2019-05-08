import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { RestDataSource } from "./rest.datasource";
import { Cart } from "./cart.model"
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { HttpModule } from "@angular/http";
import { AuthService } from "../admin/auth.service";


@NgModule({
  imports:[HttpModule],
  providers: [
  	ProductRepository , 
  	Cart, 
  	Order, 
  	OrderRepository, 
  	RestDataSource,
  	AuthService
  ]
})
export class ModelModule { }