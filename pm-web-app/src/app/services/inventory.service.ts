import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {Product} from "../model/product.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http:HttpClient) {

  }

  public getAllProducts() : Observable<Array<Product>> {
    return this.http.get<Array<Product>>("http://localhost:8888/INVENTORY-SERVICE/products");
  }

  public deleteProduct() {

  }
}
