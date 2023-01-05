import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustomersComponent} from "./customers/customers.component";
import {BillsComponent} from "./bills/bills.component";
import {EditProductComponent} from "./edit-product/edit-product.component";

const routes: Routes = [
  {path : "products", component : ProductsComponent},
  {path : "customers", component : CustomersComponent},
  {path : "bills", component : BillsComponent},
  {path : "editProduct", component : EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
