import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit{

  addCustomerFormGroup! : FormGroup;

  constructor(private customerService:CustomerService, private fb:FormBuilder) {

  }
  ngOnInit(): void {

    this.addCustomerFormGroup = this.fb.group({
      customerName : this.fb.control(null),
      customerEmail : this.fb.control(null)
    });

  }

  handleAddCustomer() {

  }
}
