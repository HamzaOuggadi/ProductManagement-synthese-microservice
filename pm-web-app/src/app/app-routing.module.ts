import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustomersComponent} from "./customers/customers.component";
import {BillsComponent} from "./bills/bills.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {HomeComponent} from "./home/home.component";
import {AddCustomerComponent} from "./add-customer/add-customer.component";

const routes: Routes = [
  {path : "products", component : ProductsComponent},
  {path : "customers", component : CustomersComponent},
  {path : "bills", component : BillsComponent},
  {path : "bills/id", component : BillsComponent},
  {path : "editProduct", component : EditProductComponent},
  {path : "editProduct/:id", component : EditProductComponent},
  {path : "addProduct", component : AddProductComponent},
  {path : "", component : HomeComponent},
  {path : "addCustomer", component : AddCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
