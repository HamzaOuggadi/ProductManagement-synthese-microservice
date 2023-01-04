package net.hamzaouggadi.billingservice;

import lombok.extern.slf4j.Slf4j;
import net.hamzaouggadi.billingservice.entities.Bill;
import net.hamzaouggadi.billingservice.entities.ProductItem;
import net.hamzaouggadi.billingservice.model.Customer;
import net.hamzaouggadi.billingservice.model.Product;
import net.hamzaouggadi.billingservice.repositories.BillRepository;
import net.hamzaouggadi.billingservice.repositories.ProductItemRepository;
import net.hamzaouggadi.billingservice.service.CustomerRestClient;
import net.hamzaouggadi.billingservice.service.ProductRestClient;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@SpringBootApplication
@EnableFeignClients
@Slf4j
public class BillingServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(BillingServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner start(BillRepository billRepository,
                            ProductItemRepository productItemRepository,
                            CustomerRestClient customerRestClient,
                            ProductRestClient productRestClient) {
        return args -> {
            Collection<Product> products = productRestClient.allProduct();
            for (int i=1;i<=3; i++) {
                Customer customer = customerRestClient.findCustomerById(Long.valueOf(i));
                if (customer==null) throw new RuntimeException("Customer Not Found!");
                log.info("Customer Id : " + customer.getCustomerId());
                log.info("Customer Name : " + customer.getCustomerName());
                log.info("Customer Email : " + customer.getCustomerEmail());
                Bill bill = Bill.builder()
                        .billDate(new Date())
                        .customerId(customer.getCustomerId())
                        .build();
                Bill savedBill = billRepository.save(bill);
                products.forEach(prd->{
                    ProductItem productItem = new ProductItem();
                    productItem.setBill(savedBill);
                    productItem.setProductItemQuantity((int)(1+(Math.random()*10)));
                    productItem.setProductItemPrice(prd.getProductPrice());
                    productItem.setDiscount(BigDecimal.valueOf(Math.random()).setScale(2, RoundingMode.HALF_UP).doubleValue());
                    productItem.setProductId(prd.getProductId());
                    productItem.setProductItemDescription(prd.getProductDescription());
                    productItemRepository.save(productItem);
                });
            }

        };
    }

}
