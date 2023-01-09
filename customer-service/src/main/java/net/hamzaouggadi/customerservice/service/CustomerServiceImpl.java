package net.hamzaouggadi.customerservice.service;

import lombok.AllArgsConstructor;
import net.hamzaouggadi.customerservice.entities.Customer;
import net.hamzaouggadi.customerservice.exceptions.CustomerException;
import net.hamzaouggadi.customerservice.repositories.CustomerRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@Transactional
@AllArgsConstructor
public class CustomerServiceImpl implements CustomerService{
    private CustomerRepository customerRepository;
    @Override
    public List<Customer> listCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer getCustomerById(Long customerId) throws CustomerException {
        return customerRepository.findById(customerId).orElseThrow(() -> new CustomerException("Customer Not Found!"));
    }

    @Override
    public Customer addCustomer(Customer customer) throws CustomerException {
        if (customerRepository.findCustomerByCustomerEmail(customer.getCustomerEmail()) != null) {
            throw new CustomerException("Customer Already Exists!");
        } else {
            Customer newCustomer = Customer.builder()
                    .customerName(customer.getCustomerName())
                    .customerEmail(customer.getCustomerEmail())
                    .build();
            return customerRepository.save(newCustomer);
        }
    }

    @Override
    public void deleteCustomerById(Long customerID) throws CustomerException {
        if (customerRepository.findById(customerID).isPresent()) {
            customerRepository.deleteById(customerID);
        } else {
            throw new CustomerException("Customer Not Found!");
        }
    }
}
