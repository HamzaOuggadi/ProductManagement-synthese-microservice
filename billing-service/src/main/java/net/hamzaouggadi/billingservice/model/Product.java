package net.hamzaouggadi.billingservice.model;

import lombok.Data;

@Data
public class Product {
    private Long productId;
    private String productName;
    private String productDescription;
    private int productQuantity;
    private double productPrice;

}
