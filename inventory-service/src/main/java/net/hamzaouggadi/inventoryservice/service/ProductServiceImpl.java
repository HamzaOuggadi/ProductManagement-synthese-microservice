package net.hamzaouggadi.inventoryservice.service;

import lombok.AllArgsConstructor;
import net.hamzaouggadi.inventoryservice.entities.Product;
import net.hamzaouggadi.inventoryservice.exceptions.ProductException;
import net.hamzaouggadi.inventoryservice.repositories.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@Transactional
@AllArgsConstructor
public class ProductServiceImpl implements ProductService{
    private ProductRepository productRepository;

    @Override
    public List<Product> listProduct() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Long productId) throws ProductException {
        return productRepository.findById(productId).orElseThrow(() -> new ProductException("Product Not Found!"));
    }

    @Override
    public Product addProduct(Product product) {
        Product newProduct = Product.builder()
                .productName(product.getProductName())
                .productDescription(product.getProductDescription())
                .productPrice(product.getProductPrice())
                .productQuantity(product.getProductQuantity())
                .build();
        return productRepository.save(newProduct);
    }

    @Override
    public Product editProduct(Product product) throws ProductException {
        Product editedProduct = productRepository.findById(product.getProductId()).orElseThrow(() -> new ProductException("Product Not Found!"));
        editedProduct.setProductName(product.getProductName());
        editedProduct.setProductDescription(product.getProductDescription());
        editedProduct.setProductPrice(product.getProductPrice());
        editedProduct.setProductQuantity(product.getProductQuantity());
        return productRepository.save(editedProduct);
    }

    @Override
    public List<Product> searchProductByKeyword(String keyword) {
        return productRepository.findByProductNameContainsIgnoreCase(keyword);
    }

    @Override
    public void deleteProduct(Long productId) throws ProductException {
        productRepository.deleteById(productId);
    }
}
