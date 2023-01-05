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

    this.loadProducts();

    console.log("Products Object Here : " + this.products);
  }

  loadProducts() {
    this.inventoryService.getAllProducts().subscribe({
      next : (data) => {
        this.products = data;
      }, error : (err) => {
        console.log(err);
      }
    });
  }

  handleDeleteProduct(productId : number) {
    console.log("Test Delete Function")
    this.inventoryService.deleteProduct(productId).subscribe(()=> this.loadProducts())
  }
}
