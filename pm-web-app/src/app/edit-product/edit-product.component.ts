import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup} from "@angular/forms";
import {InventoryService} from "../services/inventory.service";
import {Product} from "../model/product.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{

  editProductFormGroup! : FormGroup;
  editedProduct! : Product;
  savedProduct! : Product;

  currentProductId! : number;

  constructor(private http : HttpClient,
              private fb:FormBuilder,
              private inventoryService:InventoryService,
              private router:Router,
              private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {

    this.currentProductId = this.activatedRoute.snapshot.params['id'];


    console.log(this.editedProduct);

    this.editProductFormGroup = this.fb.group({
      productName : this.fb.control(null),
      productPrice : this.fb.control(null),
      productQuantity : this.fb.control(null),
      productDescription : this.fb.control(null)

    });
  }

  // loadProduct(productId:number) {
  //    this.editedProduct = this.inventoryService.getProductById(productId).subscribe({
  //
  //    });
  // }

  handleEditProduct() {
    this.editedProduct = this.editProductFormGroup.value;
    this.editedProduct.productId = this.currentProductId;
    this.inventoryService.editProduct(this.editedProduct).subscribe({
      next : data => {
        alert("Product Successfully Edited.")
        this.router.navigate(["/products"]);
      }, error : err => {
        console.log(err);
      }
    })
  }
}
