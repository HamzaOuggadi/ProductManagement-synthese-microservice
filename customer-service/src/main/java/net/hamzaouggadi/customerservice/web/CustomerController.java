package net.hamzaouggadi.customerservice.web;

import lombok.AllArgsConstructor;
import net.hamzaouggadi.customerservice.entities.Customer;
import net.hamzaouggadi.customerservice.exceptions.CustomerException;
import net.hamzaouggadi.customerservice.service.CustomerService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class CustomerController {
    private CustomerService customerService;
    @GetMapping("/customers")
    @PreAuthorize("hasAuthority('User')")
    public List<Customer> getCustomerList() {
        return customerService.listCustomers();
    }
    @GetMapping("/customers/{customerId}")
//    @PreAuthorize("hasAuthority('User')")
    public Customer getCustomerById(@PathVariable Long customerId) throws CustomerException {
        return customerService.getCustomerById(customerId);
    }
    @PostMapping("/customers/addCustomer")
    @PreAuthorize("hasAuthority('Admin')")
    public Customer addCustomer(@RequestBody Customer customer) throws CustomerException {
        return customerService.addCustomer(customer);
    }
    @DeleteMapping("/customers/deleteCustomer/{customerId}")
    @PreAuthorize("hasAuthority('Admin')")
    public void deleteCustomerById(@PathVariable Long customerId) throws CustomerException {
        customerService.deleteCustomerById(customerId);
    }
}
