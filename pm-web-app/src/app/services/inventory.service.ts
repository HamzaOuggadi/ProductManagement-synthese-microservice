import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  product! : Array<any>;
  constructor() {
    this.product = [
      {id : 1, name : "Computer", price : 2499.99},
      {id : 2, name : "Printer", price : 999.99},
      {id : 3, name : "Phone", price : 599.99},
      {id : 4, name : "Laptop", price : 1999.99},
      {id : 5, name : "Tablet", price : 1499.99}
    ]
  }

  public getAllProducts() : Observable<Array<any>> {
    let rnd = Math.random();
    if (rnd<0.1) return throwError(()=>new Error("Products Not Found !"));
    else return of(this.product);
  }

  public deleteProduct() {

  }
}
