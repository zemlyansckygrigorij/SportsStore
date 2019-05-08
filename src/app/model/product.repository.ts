import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { RestDataSource } from "./rest.datasource";
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductRepository{
	private products: Product[] = [];
	private categories: string[] = [];
	
    constructor(private dataSource: RestDataSource ){
		dataSource.getProducts().subscribe(data => {
				console.log(data);
				this.products = data;
				this.categories = data.map(p=>p.category).filter((c, index, array) => array.indexOf(c)==index).sort();
		},error =>{});	
	}



	getProducts(category: string=null): Product[]{
		return this.products.filter(p => category ==  null ||category==p.category);
	}

	getProduct(id: number) :Product{
		return this.products.find(p => p.id ==id);
	}

	getCategories(): string[]{
		return this.categories;
	}
}