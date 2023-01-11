package net.hamzaouggadi.billingservice.web;

import jakarta.ws.rs.Path;
import net.hamzaouggadi.billingservice.entities.Bill;
import net.hamzaouggadi.billingservice.model.Customer;
import net.hamzaouggadi.billingservice.repositories.BillRepository;
import net.hamzaouggadi.billingservice.repositories.ProductItemRepository;
import net.hamzaouggadi.billingservice.service.CustomerRestClient;
import net.hamzaouggadi.billingservice.service.ProductRestClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BillRestController {
    private BillRepository billRepository;
    private ProductItemRepository productItemRepository;
    private CustomerRestClient customerRestClient;
    private ProductRestClient productRestClient;

    public BillRestController(BillRepository billRepository,
                              ProductItemRepository productItemRepository,
                              CustomerRestClient customerRestClient,
                              ProductRestClient productRestClient) {
        this.billRepository = billRepository;
        this.productItemRepository = productItemRepository;
        this.customerRestClient = customerRestClient;
        this.productRestClient = productRestClient;
    }
    @GetMapping("/getFullBill/{id}")
    public Bill getBill(@PathVariable Long id) throws Exception {
        Bill bill = billRepository.findById(id).orElse(null);
        if (bill == null) throw new Exception("Bill Not Found");
        bill.setCustomer(customerRestClient.findCustomerById(bill.getCustomerId()));
        bill.getProductItems().forEach(pi->{
            pi.setProduct(productRestClient.findProductById(pi.getProductId()));
        });
        return bill;
    }
    @GetMapping("/bills/byCustomerId/{customerId}")
    public Bill getBillByCustomerId(@PathVariable Long customerId) {
        Bill bill = billRepository.findByCustomerId(customerId);
        return bill;
    }
}
