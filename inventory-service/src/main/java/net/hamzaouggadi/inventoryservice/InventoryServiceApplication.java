package net.hamzaouggadi.inventoryservice;

import lombok.extern.slf4j.Slf4j;
import net.hamzaouggadi.inventoryservice.entities.Product;
import net.hamzaouggadi.inventoryservice.repositories.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;


import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.stream.Stream;

@SpringBootApplication
@Slf4j
public class InventoryServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(InventoryServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner start(ProductRepository productRepository,
							RepositoryRestConfiguration restConfiguration) {
		return args -> {

			restConfiguration.exposeIdsFor(Product.class);

			for (int i=0; i<10; i++) {
				Stream.of("DELL XPS 13", "DELL Latitude 9500", "DELL Precision 7595", "DELL Optiplex 3310").forEach(prod-> {
					Product product = Product.builder()
							.productName(prod)
							.productDescription("Description : " + prod)
							.productPrice(BigDecimal.valueOf(7000 + Math.random()*10000).setScale(2, RoundingMode.HALF_UP).doubleValue())
							.productQuantity((int)(Math.random()*100))
							.build();

					log.info("Product Quantity" + product.getProductQuantity());

					productRepository.save(product);
				});
			}

		};
	}
}
