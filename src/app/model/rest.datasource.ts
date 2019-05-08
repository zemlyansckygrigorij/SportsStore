import { Injectable } from "@angular/core";
import { Http, Request , RequestMethod } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import "rxjs/add/operator/map";

const PROTOCOL  = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource{
	baseUrl: string;

	constructor(private http: Http){
		this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}`;

		console.log(this.baseUrl);
	}

	getProducts(): Observable<Product[]> {
		return this.http.request(new Request({
				method: RequestMethod.Get,
				url: this.baseUrl+ "/products"
				})).map(response => response.json());
	}
	

	saveOrder(order: Order): Observable<Order> {
		return this.http.request(new Request({
				method: RequestMethod.Post,
				url: this.baseUrl+ "orders",
				body: order})).map(response => response.json());
	}
		
}
