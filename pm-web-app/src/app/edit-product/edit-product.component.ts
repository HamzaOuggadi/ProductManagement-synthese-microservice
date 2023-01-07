import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup} from "@angular/forms";
import {InventoryService} from "../services/inventory.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{

  editProductFormGroup! : FormGroup;
  product! : Product;

  constructor(private http : HttpClient,
              private fb:FormBuilder,
              private inventoryService:InventoryService) {
  }

  ngOnInit(): void {

    this.editProductFormGroup = this.fb.group({
      productName : this.fb.control(null),
      productPrice : this.fb.control(null),
      productQuantity : this.fb.control(null),
      productDescription : this.fb.control(null)

    });
  }

  handleEditProduct() {
  }
}
