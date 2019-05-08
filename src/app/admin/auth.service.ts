import { Injectable } from "@angular/core";
import { Observable } from "@angular/Observable";
import { RestDataSource } from "../model/rest.datasource";
import "rxjs/add/operator/map";

@Injectable()
export class AuthService {
	constructor(private datasource: RestDataSource){}

	authenticate(username: string, password: string): Observable<boolean>{
		return this.datasource.authenticate(username, password);
	}

	get authenticated(): boolean {
		return this.datasource.this.auth_token != null;
	}
	clear() {
		return this.datasource.this.auth_token = null;
	}
}