package net.hamzaouggadi.customerservice.service;

import net.hamzaouggadi.customerservice.entities.Customer;

import java.util.List;

public interface CustomerService {
    List<Customer> listCustomers();
    Customer getCustomerById(Long customerId);
    Customer addCustomer(Customer customer);

}
