import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
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

    this.customers = this.loadCustomers();

  }

  loadCustomers() : Observable<Array<Customer>> {
    return this.customerService.getAllCustomers();
  }

}
