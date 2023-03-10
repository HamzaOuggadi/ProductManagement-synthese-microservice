package net.hamzaouggadi.inventoryservice.service;

import net.hamzaouggadi.inventoryservice.entities.Product;
import net.hamzaouggadi.inventoryservice.exceptions.ProductException;

import java.util.List;

public interface ProductService {
    List<Product> listProduct();
    Product getProductById(Long productId) throws ProductException;
    Product addProduct(Product product);
    Product editProduct(Product product) throws ProductException;
    List<Product> searchProductByKeyword(String keyword);
    void deleteProduct(Long productId) throws ProductException;
}
