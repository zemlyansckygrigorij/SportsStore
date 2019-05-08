import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
@Component({
	moduleId: module.id,
	selector: 'cart-detail',
	templateUrl: './cartDetail.component.html',
    styleUrls: ['./cartDetail.component.css']
})

export class CartDetailComponent {
	constructor(public cart: Cart){}
}