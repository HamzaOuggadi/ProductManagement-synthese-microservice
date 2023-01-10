import {Customer} from "./customer.model";
import {Product} from "./product.model";

export interface Bill {
  billId: number;
  billDate: Date;
  customerId: number;
  productItems: Array<Product>;
  customer: Customer;
}
