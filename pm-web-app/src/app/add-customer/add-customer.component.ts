import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../services/customer.service";
import {Customer} from "../model/customer.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit{

  addCustomerFormGroup! : FormGroup;
  customer! : Customer;

  constructor(private customerService:CustomerService,
              private fb:FormBuilder,
              private router:Router) {

  }
  ngOnInit(): void {

    this.addCustomerFormGroup = this.fb.group({
      customerName : this.fb.control(null, [Validators.required, Validators.minLength(3)]),
      customerEmail : this.fb.control(null, [Validators.required, Validators.email])
    });

  }

  handleAddCustomer() {
    this.customer = this.addCustomerFormGroup.value;
    this.customerService.addCustomer(this.customer).subscribe({
      next : data => {
        alert("Customer Saved Successfully")
        this.router.navigate(['/customers']);
      }, error : err => {
        console.log(err);
      }
    });
  }
}
