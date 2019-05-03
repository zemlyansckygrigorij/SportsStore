import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";


@NgModule({
  declarations: [
    StoreComponent, CounterDirective, 
    CartSummaryComponent, CartDetailComponent, CheckoutComponent
  ],
  imports: [
  	ModelModule,
    BrowserModule,
    FormsModule
  ],
  exports:[StoreComponent, CartDetailComponent, CheckoutComponent],
  
 
})
export class StoreModule { }
