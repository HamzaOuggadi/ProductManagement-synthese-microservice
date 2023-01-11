import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bill} from "../model/bill.model";
import {BillingService} from "../services/billing.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  bill! : Observable<Bill>;
  customerId! : number;
  billId! : number;
  constructor(private http:HttpClient,
              private billingService:BillingService,
              private router:Router,
              private activatedRoute:ActivatedRoute) {
  }
  ngOnInit(): void {

    this.customerId = this.activatedRoute.snapshot.params['id'];

    this.bill = this.loadBillByCustomerId(this.customerId);

  }

  loadBillByCustomerId(customerId:number) : Observable<Bill> {
    return this.billingService.getFullBill(customerId);
  }

}
