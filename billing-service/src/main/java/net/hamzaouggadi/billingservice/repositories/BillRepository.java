package net.hamzaouggadi.billingservice.repositories;

import net.hamzaouggadi.billingservice.entities.Bill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BillRepository extends JpaRepository<Bill, Long> {
}
