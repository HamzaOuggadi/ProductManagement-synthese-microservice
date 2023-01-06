package net.hamzaouggadi.inventoryservice.repositories;

import net.hamzaouggadi.inventoryservice.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestResource
//@CrossOrigin(origins = "*")
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByProductNameContains(String keyword);
}
