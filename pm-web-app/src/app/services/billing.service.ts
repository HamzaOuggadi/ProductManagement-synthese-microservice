import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bill} from "../model/bill.model";

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(private http:HttpClient) {

  }

  public getFullBill(billId : number) : Observable<Bill> {
    return this.http.get<Bill>("http://localhost:8888/BILLING-SERVICE/getFullBill/"+billId);
  }

  public getBillByCustomerId(customerId:number) : Observable<Bill> {
    return this.http.get<Bill>("http://localhost:8888/BILLING-SERVICE/bills/byCustomerId/"+customerId);
  }

}
