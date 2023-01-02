import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InventoryService} from "../services/inventory.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products : any;
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

    this.http.get("http://localhost:8888/INVENTORY-SERVICE/products").subscribe({
      next : (data) => {
        this.products = data;
      },
      error : (err)=> {

      }
    });

    console.log("Products Object Here : " + this.products);
  }

  // handleDelete(p: any) {
  //   let index = this.products.indexOf(p);
  //   this.products.splice(index, 1);
  // }
}
