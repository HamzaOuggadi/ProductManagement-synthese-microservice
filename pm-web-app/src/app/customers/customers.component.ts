import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Customer} from "../model/customer.model";
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{
  customers! : Observable<Array<Customer>>;
  constructor(private http:HttpClient, private customerService:CustomerService) {
  }
  ngOnInit(): void {

    this.loadCustomers();

  }

  loadCustomers() {
    return this.customers = this.customerService.getAllCustomers().pipe(catchError(err => {
      return throwError(err);
    }));
  }

  handleDeleteCustomer(customerId:number) {
    this.customerService.deleteCustomerById(customerId).subscribe(()=>this.loadCustomers());
  }
}
