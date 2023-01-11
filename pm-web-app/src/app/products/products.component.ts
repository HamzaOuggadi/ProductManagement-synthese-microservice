import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InventoryService} from "../services/inventory.service";
import {Product} from "../model/product.model";
import {catchError, Observable, throwError} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products! : Observable<Array<Product>>;
  errorMessage! : String;
  searchFormGroup! : FormGroup;
  product! : Product;
  constructor(private http:HttpClient,
              private inventoryService:InventoryService,
              private fb:FormBuilder,
              private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {

    this.searchFormGroup = this.fb.group({
      keyword : this.fb.control("")
    });

    this.loadProducts();

    // console.log("Products Object Here : " + this.products);
  }

  loadProducts() {
    this.products = this.inventoryService.getAllProducts().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
    // this.inventoryService.getAllProducts().subscribe({
    //   next : (data) => {
    //     this.products = data;
    //
    //   }, error : (err) => {
    //     console.log(err);
    //   }
    // });
  }

  handleDeleteProduct(productId : number) {
    console.log("Test Delete Function")
    this.inventoryService.deleteProduct(productId).subscribe(()=> this.loadProducts())
  }

  handleSearchProduct() {
    let kw = this.searchFormGroup?.value.keyword
    this.products = this.inventoryService.searchProductByKeyword(kw).pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err)
      })
    );
  }
}
