package net.hamzaouggadi.customerservice;

import net.hamzaouggadi.customerservice.entities.Customer;
import net.hamzaouggadi.customerservice.repositories.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.stream.Stream;

@SpringBootApplication
public class CustomerServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CustomerServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner start(CustomerRepository customerRepository,
							RepositoryRestConfiguration restConfiguration) {
		return args -> {
			restConfiguration.exposeIdsFor(Customer.class);
			Stream.of("Hamza", "Yasmine", "Aziz", "Jacky").forEach(cust -> {
				Customer customer = Customer.builder()
						.customerName(cust)
						.customerEmail(cust + "@gmail.com")
						.build();

				customerRepository.save(customer);
			});
		};
	}
}
