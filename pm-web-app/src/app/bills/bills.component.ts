import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bill} from "../model/bill.model";
import {BillingService} from "../services/billing.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../services/customer.service";
import {Customer} from "../model/customer.model";

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  bill! : Bill;
  customerId! : number;
  customer! : Customer;
  billId! : number;
  constructor(private http:HttpClient,
              private billingService:BillingService,
              private router:Router,
              private activatedRoute:ActivatedRoute,
              private customerService:CustomerService) {
  }
  ngOnInit(): void {

    this.customerId = this.activatedRoute.snapshot.params['id'];

    this.customerService.getCustomerById(this.customerId).subscribe({
      next : data => {
        this.customer = data;
      }
    })

    this.loadBillByCustomerId(this.customerId).subscribe({
      next : data => {
        this.bill = data;
      }
    });

  }

  loadBillByCustomerId(customerId:number) : Observable<Bill> {
    return this.billingService.getBillByCustomerId(customerId);
  }

}
