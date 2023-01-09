import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";
import {Customer} from "../model/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) {

  }

  public getAllCustomers() : Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>("http://localhost:8888/CUSTOMER-SERVICE/customers");
  }

  public addCustomer(customer  : Customer) {
    return this.http.post("http://localhost:8888/CUSTOMER-SERVICE/customers/addCustomer", customer);
  }
}
