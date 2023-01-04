import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InventoryService} from "../services/inventory.service";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products! : Array<Product>;
  errorMessage! : String;
  constructor(private http:HttpClient, private inventoryService:InventoryService) {

  }

  ngOnInit(): void {

    // this.inventoryService.getAllProducts().subscribe({
    //   next : (data) => {
    //     this.products = data;
    //   },
    //   error : (err) => {
    //     this.errorMessage = err
    //   }
    // });

    // this.http.get<Array<Product>>("http://localhost:8888/INVENTORY-SERVICE/products").subscribe({
    //   next : (data) => {
    //     this.products = data;
    //   },
    //   error : (err)=> {
    //
    //   }

    this.inventoryService.getAllProducts().subscribe({
      next : (data) => {
        this.products = data;
      }, error : (err) => {
        console.log(err);
      }
    });

    //   this.http.get<Array<Product>>("http://localhost:8888/INVENTORY-SERVICE/products").subscribe({
    //     next : (data) => {
    //       this.products = data;
    //     },
    //     error : (err)=> {
    //       console.log(err);
    //     }
    // });

    console.log("Products Object Here : " + this.products);
  }

  // handleDelete(p: any) {
  //   let index = this.products.indexOf(p);
  //   this.products.splice(index, 1);
  // }
}
