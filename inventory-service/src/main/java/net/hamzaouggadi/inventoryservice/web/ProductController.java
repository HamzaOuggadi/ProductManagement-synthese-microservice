package net.hamzaouggadi.inventoryservice.web;

import lombok.AllArgsConstructor;
import net.hamzaouggadi.inventoryservice.entities.Product;
import net.hamzaouggadi.inventoryservice.exceptions.ProductException;
import net.hamzaouggadi.inventoryservice.service.ProductService;
import net.hamzaouggadi.inventoryservice.service.ProductServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
//@CrossOrigin(methods = RequestMethod.DELETE)
public class ProductController {
    private ProductService productService;
    @GetMapping("/products")
    public List<Product> getProducts() {
        return productService.listProduct();
    }
    @GetMapping("/products/{productId}")
    public Product getProductById(@PathVariable Long productId) throws ProductException {
        return productService.getProductById(productId);
    }
    @PostMapping("/products/addProduct")
    public Product addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }
    @DeleteMapping("/products/deleteProduct/{productId}")
    public void deleteProduct(@PathVariable Long productId) throws ProductException {
        productService.deleteProduct(productId);
    }

    @GetMapping("/products/search")
    public List<Product> searchProduct(@RequestParam(name = "keyword", defaultValue = "") String keyword) {
        return productService.searchProductByKeyword(keyword);
    }
    @PutMapping("/products/editProduct")
    public Product editProduct(@RequestBody Product product) throws ProductException {
        return productService.editProduct(product);
    }
}
