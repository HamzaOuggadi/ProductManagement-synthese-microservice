package net.hamzaouggadi.billingservice.repositories;

import net.hamzaouggadi.billingservice.entities.ProductItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductItemRepository extends JpaRepository<ProductItem, Long> {
}
