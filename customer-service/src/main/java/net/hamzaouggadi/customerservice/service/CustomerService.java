package net.hamzaouggadi.customerservice.service;

import net.hamzaouggadi.customerservice.entities.Customer;
import net.hamzaouggadi.customerservice.exceptions.CustomerException;

import java.util.List;

public interface CustomerService {
    List<Customer> listCustomers();
    Customer getCustomerById(Long customerId) throws CustomerException;
    Customer addCustomer(Customer customer) throws CustomerException;
    void deleteCustomerById(Long customerID) throws CustomerException;
}
