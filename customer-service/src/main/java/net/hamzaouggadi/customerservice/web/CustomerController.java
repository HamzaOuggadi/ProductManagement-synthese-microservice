package net.hamzaouggadi.customerservice.web;

import lombok.AllArgsConstructor;
import net.hamzaouggadi.customerservice.entities.Customer;
import net.hamzaouggadi.customerservice.exceptions.CustomerException;
import net.hamzaouggadi.customerservice.service.CustomerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class CustomerController {
    private CustomerService customerService;
    @GetMapping("/customers")
    public List<Customer> getCustomerList() {
        return customerService.listCustomers();
    }
    @GetMapping("/customers/{customerId}")
    public Customer getCustomerById(@PathVariable Long customerId) throws CustomerException {
        return customerService.getCustomerById(customerId);
    }
    @PostMapping("/customers/addCustomer")
    public Customer addCustomer(@RequestBody Customer customer) throws CustomerException {
        return customerService.addCustomer(customer);
    }
}
