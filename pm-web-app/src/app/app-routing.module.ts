import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustomersComponent} from "./customers/customers.component";
import {BillsComponent} from "./bills/bills.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {HomeComponent} from "./home/home.component";
import {AddCustomerComponent} from "./add-customer/add-customer.component";
import {AuthGuard} from "./guards/security.guard";

const routes: Routes = [
  {path : "products", component : ProductsComponent},
  {path : "customers", component : CustomersComponent},
  {path : "bills", component : BillsComponent, canActivate : [AuthGuard], data : {roles : ['Admin']}},
  {path : "bills/:id", component : BillsComponent, canActivate : [AuthGuard], data : {roles : ['Admin']}},
  {path : "editProduct", component : EditProductComponent, canActivate : [AuthGuard], data : {roles : ['User']}},
  {path : "editProduct/:id", component : EditProductComponent, canActivate : [AuthGuard], data : {roles : ['User']}},
  {path : "addProduct", component : AddProductComponent, canActivate : [AuthGuard], data : {roles : ['User']}},
  {path : "", component : HomeComponent},
  {path : "addCustomer", component : AddCustomerComponent, canActivate : [AuthGuard], data : {roles : ['Admin']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
