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

  public deleteProduct(productId : number) : Observable<any> {
    return this.http.delete("http://localhost:8888/INVENTORY-SERVICE/products/deleteProduct/"+productId);
  }

  public searchProductByKeyword(keyword : String) : Observable<Array<Product>> {
    return this.http.get<Array<Product>>("http://localhost:8888/INVENTORY-SERVICE/products/search?keyword="+keyword);
  }

  public editProduct(product:Product) {
    return this.http.put("http://localhost:8888/INVENTORY-SERVICE/products/editProduct", product);
  }

  public addProduct(product : Product) {
    return this.http.post("http://localhost:8888/INVENTORY-SERVICE/products/addProduct", product);
  }

  public getProductById(productId:number) : Observable<Product> {
    return this.http.get<Product>("http://localhost:8888/INVENTORY-SERVICE/products/"+productId);
  }
}
