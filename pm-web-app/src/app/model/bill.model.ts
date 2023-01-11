import {Customer} from "./customer.model";
import {Product} from "./product.model";
import {ProductItem} from "./product-item.model";

export interface Bill {
  billId: number;
  billDate: Date;
  customerId: number;
  productItems: Array<ProductItem>;
  customer: Customer;
}
