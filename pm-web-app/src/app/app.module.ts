import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from "@angular/common/http";
import { CustomersComponent } from './customers/customers.component';
import { BillsComponent } from './bills/bills.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";

export function kcFactory(kcService : KeycloakService) {
  return ()=>{
    kcService.init({
      config : {
        realm : "pm-realm",
        clientId : "customer-service-client",
        url : "http://localhost:8080/"
      }
    })
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    BillsComponent,
    EditProductComponent,
    AddProductComponent,
    HomeComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    KeycloakAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
