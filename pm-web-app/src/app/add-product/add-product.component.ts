import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {InventoryService} from "../services/inventory.service";
import {Product} from "../model/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  addProductFormGroup! : FormGroup;
  newProduct! : Product;
  constructor(private http:HttpClient,
              private fb:FormBuilder,
              private inventoryService:InventoryService,
              private router:Router) {
  }
  ngOnInit(): void {
    this.addProductFormGroup = this.fb.group({
      productName : this.fb.control(null, [Validators.required, Validators.minLength(3)]),
      productPrice : this.fb.control(null, [Validators.required]),
      productQuantity : this.fb.control(null, [Validators.required]),
      productDescription : this.fb.control(null)
    })
  }

  handleAddProduct() {
    this.newProduct = this.addProductFormGroup.value;
    this.inventoryService.addProduct(this.newProduct).subscribe({
      next : data => {
        alert("Product Saved Successfully.")
        this.router.navigate(['/products']);
      }, error : err => {
        console.log(err);
      }
    });
  }
}
